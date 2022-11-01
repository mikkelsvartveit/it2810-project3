import { ApolloError } from "@apollo/client";
import { Alert, AlertTitle, Button } from "@mui/material";

const mapError: (error: ApolloError) => { title: string; message: string }[] = (
  error
) => {
  if (error.networkError)
    return [
      {
        title: "Network error",
        message:
          "Could not connect to the server. Please check your network connection or try again later.",
      },
    ];
  if (error.graphQLErrors.length > 0)
    return error.graphQLErrors.map((error) => ({
      title: (error.extensions?.code as string) ?? "Unknown error",
      message: error.message,
    }));
  return [
    {
      title: "Unknown error",
      message:
        error.message ?? "An unknown error occured. Please try again later.",
    },
  ];
};

export const ErrorAlert = ({
  error: apolloError,
  buttonLabel,
  handleRetry,
}: {
  error: ApolloError;
  buttonLabel?: string;
  handleRetry?: () => void;
}) => {
  const errorArray = mapError(apolloError);

  const reloadWindow = () => {
    window.location.reload();
  };

  return (
    <>
      {errorArray.map((error, i) => (
        <Alert
          severity="error"
          key={i}
          style={{
            maxWidth: "500px",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            marginTop: i > 0 ? "20px" : "0",
          }}
          action={
            <Button
              variant="contained"
              color="error"
              size="small"
              style={{ marginRight: "10px" }}
              onClick={() => (handleRetry ? handleRetry() : reloadWindow())}
            >
              {buttonLabel ? buttonLabel : "Retry"}
            </Button>
          }
        >
          <AlertTitle>{error.title}</AlertTitle>
          {error.message}
        </Alert>
      ))}
    </>
  );
};

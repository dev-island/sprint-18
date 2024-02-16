import getErrorMessage from "./getErrorMessage";

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};

export type RequestBody = Record<string, unknown> | null;

const requestHandler = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: RequestBody
): Promise<ApiResponse<T>> => {
  try {
    const options: RequestInit = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      const errString = data.errors
        ? data.errors.map((err: any) => err.msg).join(", ")
        : data.message ? data.message : data.error;
      return {
        error: getErrorMessage(errString || "Something went wrong"),
      };
    }

    return { data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};

export default requestHandler;

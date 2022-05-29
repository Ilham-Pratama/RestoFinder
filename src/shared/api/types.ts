export interface QueryArgs<Variables, Result> {
  variables: Variables;
  onError?: (e: Error) => void;
  onSuccess?: (data: Result) => void;
  onSettled?: (data: Result | undefined, error: Error | null) => void;
}

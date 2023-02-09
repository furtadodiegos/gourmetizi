import { RetryLink } from '@apollo/client/link/retry';

const retryLink = new RetryLink({
  delay: {
    initial: 2000,
    max: 2000,
    jitter: false,
  },
  // To have more control follow that one
  // attempts: (count: number, operation: Operation, error: any): boolean => true,
  attempts: {
    max: 1,
    retryIf: (error, operation) => operation.operationName === 'refresh',
  },
});

export default retryLink;

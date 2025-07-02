interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message: string;
  timestamp: number;
}

function handleApiResponse<T>(response: ApiResponse<T>): T | null {
  if (response.status === 'error') {
    console.error(`API Error: ${response.message}`);
    return null;
  }
  return response.data;
}

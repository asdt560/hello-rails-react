import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getGreetingData = createAsyncThunk('/getGreeting', async () => {
  const resp = await fetch("api/messages");
  let data = await resp.json()
  return data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    loading: false,
    text: 'empty',
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getGreetingData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getGreetingData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      text: action.text,
    }));
    builder.addCase(getGreetingData.rejected, (state, action) => ({
      ...state,
      loading: false,
      text: '',
      error: action.error.message,
    }));
  },
});

export default greetingSlice.reducer;
export { getGreetingData };

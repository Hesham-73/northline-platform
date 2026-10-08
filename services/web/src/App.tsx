import { useState } from 'react';
import { loadQuote } from './client';

export function App() {
  const [amount, setAmount] = useState('—');
  return <button onClick={() => void loadQuote('harbor').then(quote => setAmount(String(quote.amountCents)))}>{amount}</button>;
}

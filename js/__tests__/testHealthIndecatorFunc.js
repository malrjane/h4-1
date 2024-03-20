import healthIndicator from "../logic";
test('should indicate color for good health', () => {
  const input = {name: 'Маг', health: 60};
  const received = healthIndicator(input,true);
  
  expect(received).toBe('healthy');
});

test('should indicate color for medium health', () => {
  const input = {name: 'Маг', health: 20};
  const received = healthIndicator(input,true);
  
  expect(received).toBe('wounded');
});

test('should indicate color for low health', () => {
  const input = {name: 'Маг', health: 5};
  const received = healthIndicator(input,true);
  
  expect(received).toBe('critical');
});
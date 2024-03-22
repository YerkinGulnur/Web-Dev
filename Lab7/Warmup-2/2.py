def string_splosion(str):
  s=""
  for i in range(len(str)):
    s=s+str[:i+1]
  return s

print(string_splosion('Gulnur'))
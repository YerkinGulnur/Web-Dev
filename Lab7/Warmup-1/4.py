def missing_char(str, n):
  front = str[:n]
  back = str[n+1:]
  return front+back

print(missing_char('Gulnur', 2))
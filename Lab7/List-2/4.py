def sum67(nums):
  sum = 0
  flag = False
  for num in nums:
    if num == 6:
      flag = True
    elif num == 7 and flag:
      flag = False
    elif not flag:
      sum += num
  return sum
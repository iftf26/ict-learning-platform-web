def calculateTotal(mark1, mark2):
    pass

def isEligible(age, total):
    pass

age = int(input())
mark1 = int(input())
mark2 = int(input())
total = calculateTotal(mark1, mark2)
if isEligible(age, total):
    print("Eligible")
else:
    print("Not eligible")

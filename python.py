# a=["a","b","c"]
# b=["e","f","d"]
# i=1
# l=[]
# while i<len(a):
#     c=a+b
    
#     i+=1
# l.append(c)
# print(l)


# i=1
# l=[]
# while i<=10:
#     l.append(i)
#     i+=1
# print(l)


# n1=int(input("enter the no :"))
# n2=int(input("enter the second no :"))
# i=n1
# l=[]
# while i<=n2:
#     if i%2==0:
#         l.append(i)
    
#     i+=1
# print(l)





# L = [23, 45, 32, 25, 46,33, 71, 90]
# i=0
# l=[]
# while i<len(L):
#     if L[i]%2==0:
#         l.append(L[i])
#     i+=1
# print(l)


# l=[ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
# for i in range(len(l)):
#     for j in range(len(l[i])):
#         print(l[i][j],end="")

# l=[5,2,9,1,4,7,0]
# # l=[1, 2, 2, 5, 8, 4, 4, 8]
# for i in range(len(l)):
#     if i not in l:
#         print(i) 


# l=[1, 2, 2, 5, 8, 4, 4, 8]
# unique_list = []
     
#     # traverse for all elements
# for x in l:
#         # check if exists in unique_list or not
#     if x not in unique_list:
#         unique_list.append(x)
# print(unique_list)


# l=[9,4,2,5,5,1,6,7]
# unique=[]
# for i in range(len(l)):
#     if i not in unique:
#         print(l[i])
        
# a=1991
# s=a.split(" ")
# print(s)

# List = [6,1,3,5,6,3,1]
# l=[]
# m=1
# for i in range(len(List)):
#     if List[i] not in l:
#         l.append(List[i])
#         # m*=l[i]
# print(l)
# print(m-30)

# a=[9,1,1,9]
# i=0
# string=""
# while i<len(a):
#     square=a[i]**2
#     string+=str(square)
#     i+=1
# print(string)



# list1=["mom","sanju","wow","sis"]
# l1=[]
# l2=[]
# l3=[]
# l4=[]
# for i in range(len(list1)):
#     for j in range(len(list1[i])):
        
#         if i==0:
#             l1.append(list1[i][j])
#         if i==1:
#             l2.append(list1[i][j])
#         if i==2:
#             l3.append(list1[i][j])
#         if i==3:
#             l4.append(list1[i][j])
# print(l1)
# print(l2)
# print(l3)
# print(l4)
# a=l1[::-1]
# b=l2[::-1]
# c=l3[::-1]
# d=l4[::-1]
# count=1
# if a==l1:
#     print(a,count,"it is palindrom")
#     count+=1
# if b==l2:
#     print(b,count,"it is palindrom")
#     count+=1
# if c==l3:
#     print(c,count,"it is palindrom")
#     count+=1
# if d==l4:
#     print(d,count,"it is palindrom")
#     count+=1




# l=[9,4,2,5,5,1,6,7]
# unique=[]
# for i in range(len(l)):
#     if i not in unique:
#         print(l[i])




# a=[12,45,12,13,18,13,33,13]
# l=[]
# for i in range(len(a)):
#     # print(a[i])
#     # if i not in l:
#         print(a[i])
#     for j in range(len(a[i])-1):
#         print(a[i][j])
# #         if j not in l:
# #             l.append(a[j])
# # print(l)



# n=(input("enter the number :"))
# string=""
# i=0
# while i<len(n):
#     string+=n[i]
#     j=1
#     while j<=len(n)-(i+1):
#         string+="0"
#         j+=1
#     if i==(len(n)-1):
#         break
#     else:
#         string+="+"
#     i+=1
# print(string)
            
        
            

# n=input("enter the number :")
# string=""
# i=0
# while i<len(n):
#     string+=n[i]
#     j=1
#     while j<=len(n)-(i+1):
#         string+="0"
#         j+=1
#     if i==len(n)-1:
#         break
#     else:
#         string+="+"
#     i+=1

# print(string)


# n=input("enter the number :")
# i=0
# string=""
# while i<len(n):
#     string+=n[i]
#     j=1
#     while j<=len(n)-(i+1):
#         string+="0"
#         j+=1
#     if i==len(n)-1:
#         break
#     else:
#         string+="+"
#     i+=1
# print(string)



# a=[12,45,12,13,18,13,33,13]
# max=0
# smax=0
# tmax=0
# i=0
# while i<len(a):
#     if max<a[i]:
#         max=a[i]
#     i+=1
# # print(max)
# # while i<len(a):
#     if smax<a[i]:
#         smax!=max
#     i+=1
# print(smax)



# list=[5,0,1,8,2,6,3,9,4,7]
# for j in range(len(list)):
#     for i in range(len(list)-1):
#         if list[i]>list[i+1]:
#             a=list[i]
#             list[i]=list[i+1]
#             list[i+1]=a
# print(list)


# a=[12,4,12,13,56,13,6,13]
# l=[]
# for i in range(len(a)):
#     if a[i] not in l:
#         print(a[i])






# a=[12,234,23]
# sum1=0
# for i in a:
#     string=""
#     s=str(i)
#     sum=0
#     for j in s:
#         Int=int(j)
#         sum+=Int
#     # print(sum)
#     sum1+=sum
# print(sum1)

# a=1234567
# s=str(a)
# sum=0
# for i in s:
#     INT=int(i)
#     if INT%2==0:
#         sum+=INT
# print(sum)







# a=[230,101,3099,50]
# i=0
# l=[]
# while i<len(a):
#     string=""
#     s=str(a[i])
#     j=0
#     while j<len(s):
#         if s[j]!="0":
#             string+=s[j]
#         j+=1
#     l.append(int(string))
#     i+=1
# print(l)

# a=True and False or True and False not True
# print(a)




# a=[4,5,7,89,2,3,5]
# print(a[1:2])


# print("*")
# print("*","*")
# print("*","*","*")
# print("*","*","*","*")
# print("*","*","*","*","*")


# numbers=[5,4,67,2,9,65,9,60,5]
# i=0
# max=0
# secondmax=0
# third_max=0
# while i<len(numbers):
#     if max<numbers[i]:
#         max=numbers[i]
#     if numbers[i]<max and numbers[i]>secondmax:
#         secondmax=numbers[i]
#     if numbers[i]<secondmax and numbers[i]>third_max:
#         third_max=numbers[i] 
#     i+=1
# print(max)
# print(secondmax)
# print(third_max)


# a=[1,2,3,"7","4",9]
# l1=[]
# l2=[]
# for i in a:
#     # print(i)
#     if type(i)==int:
#         l1.append(i)
#     if type(i)==str:
#         l2.append(i)
# print(l1)
# print(l2)



# removing duplicated from the list using set() 

# initializing list 
sam_list = [11, 15, 13, 16, 13, 15, 16, 11] 
# print ("The list is: " + str(sam_list)) 
print(list(set(sam_list)))
# to remove duplicated from list 
# sam_list = list(set(sam_list)) 
# print(sam_list)

# printing list after removal 
# ordering distorted
# print ("The list after removing duplicates: " + str(sam_list)) 











# a=["qwerty"]
# for i in range(len(a)):
#     for j in range(len(a[i])):
#         # print(j)
#         b=len(str(i))
#         print(b)
#         # break
#         # k=0
#         # while k<len(b[i]):
#         #     print("*")
#         #     k+=1
#         # k=0
    

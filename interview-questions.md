# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming refers to a specific type of programming paradign where the language is written in objects that are grouped together to build code that are reusable. I am not sure what functional programming is, so I am unfamiliar with the difference between the two.

Researched answer: The biggest difference between Object-based programming and functional programming is that with OOP, the languages are focuse on the manipulation of objects whereas with functional programming, it deals greately with the manipulation of functions. Another major difference is that with OOP, a lot of object code can inherit behaviors and other properities from a parent object while with functional program tend to not include inheritance, but will opt to use higher order functions in means of reuse of code.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: Although both are numbers and they are both data types in Ruby, a float and an integer in Ruby are similiar, but different at the same time. Integers in Ruby, are whole numbers without a decimal point, whereas floats are the opposite; numbers with decimal points, or partial numbers.

Researched answer: TLDR, in Ruby, integers refer to numbers that are whole, or do not have a decimal point, examples of an integer would be: 1,2,-1,-2, whereas floats are number data types that contain decimial points; examples of a float would be 1.2, 3.9, -2.3 and so forth. Other key differences to know is that precision-wise between the two, floats have lower precision when compared to integers due to the decimal part of the float sometime being very long.

1. Ruby has an implicit return. What does that mean?

Your answer: I am unsure what implicit return refers to. If I were to guess, I believe it refers to certain code being brought back automatically in the case of classes?

Researched answer: Implicit return in Ruby refers to how a block will automatically return the value of the last code line. This is why it is not necessary to use "return" in Ruby as you would have to in JavaScript, although you can if you would like, but it does not make a difference.

1. What is a block in Ruby?

Your answer: A block in Ruby refers to methods that have anoynmous functions pass down additional information.

Researched answer: Blocks, in Ruby is a way that you are able to group multiple statements together and providing them as a unit of code to be executed. They can be used for iteration, defining the method, and exception handling. Similiarly, they are almost the same as a method, and the only thing causing them to be different is that with blocks, they do not belong to an object.

1. How do you extract a value in a Ruby hash?

Your answer: In order to extract a value in a Ruby hash, you must first call the name of the hash, followed by in brackets[] and then within your brackets, use your symbol(:) followed by the name of value you would want to call that you previously created. An example of how this would look would be:

caffeine_amount[:coffee] = '95mg'
caffeine_amount[:tea] = '40mg' 
caffeine_amount[:energy_drink] = '300mg'

If you want to extract the value of energy drink you would:

p caffeine_amount[:energy_drink]
output: "300mg"

Researched answer: To extract a value in a Ruby hash, you can use the .fetch method or using the [] operands. The square bracket operators[] works as stated above, however with the .fetch method in order to use that, you would simply just follow it with the name of your hash, but instead use parantheses() followed by a symbol: and then the name of the value. If the key is note found within the hash, it would return a "KeyError" when you go to print in terminal. An example of what this would then look like is:

p caffeine_amount.fetch(:coffee)
output: "95mg"

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance is when a developer implents one or more different types of classes into another class. It is used as a base for the inheriting class, also called a subclass.

2. RSpec: RSpec, R standing for Ruby, Spec standing for specification, is a computer program language testing tool that is written in Ruby, to specifically test Ruby code in Rails testing.

3. CRUD: CRUD stands for Create, Read, Update and Delete. Referred to the developer's philosophy, it is the four basic functions that is deemed necessary for all software applications to be able to perform. The acronym is coined together from the 5 functions of HTTP verbs.

4. Test-driven development: Test-driven development or TDD in software development, is an approach where the framework will instruct developers to re-write new code, only under the condition that the test has failed. This allows the code to remain free from errors.

5. HTTP: HTTP stands for Hypertext Transfer Protocol, the foundation for all data exchanges on the web. It is responsible for fetching resources and data via requests made from a client (personal computer, or browser) to the server, which in turn, sends a response message.
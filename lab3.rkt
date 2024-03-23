------------------- ( Part One ) -------------------

#lang racket
(define ( fibonacci n)
 (cond
   [(= n 0) 0] ; base case 1
   [(= n 1) 1] ; base case 2
   (else(+ (fibonacci (- n 1)) (fibonacci(- n 2)))) ; recursive call
   )
)

(fibonacci 13)

------------------- ( Part Two)  -------------------

#lang racket
(define ( larger-rectangle a b c d)
 (cond
   [(>(* a b)(* c d))-1] ; returns -1 if the first rectangle is larger
   [(>(* c d)(* a b))1] ; returns 1 if the second rectangle is later
   [(=(* c d)(* a b))0] ;returns 0 if the rectangles are equak
   )
  )
(larger-rectangle 1 1 2 2)
(larger-rectangle 3 5 2 4)
(larger-rectangle 2 21 6 7)

------------------- ( Part One ) -------------------

#lang racket
(define ( fibonacci n)
 (cond
   [(= n 0) 0]
   [(= n 1) 1]
   (else(+ (fibonacci (- n 1)) (fibonacci(- n 2))))
   )
)

(fibonacci 13)

------------------- ( Part Two)  -------------------

#lang racket
(define ( larger-rectangle a b c d)
 (cond
   [(>(* a b)(* c d))-1]
   [(>(* c d)(* a b))1]
   [(=(* c d)(* a b))0]
   )
  )
(larger-rectangle 1 1 2 2)
(larger-rectangle 3 5 2 4)
(larger-rectangle 2 21 6 7)

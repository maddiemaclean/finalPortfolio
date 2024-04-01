#lang racket

(define(palindrome wordIn)
  (cond
   [(= (string-length wordIn) 0)#t] ; string-length: can be used to find the length of a string
   [(= (string-length wordIn) 1)#t]
    [(equal?(string-ref wordIn 0)(string-ref wordIn(-(string-length wordIn)1)))#t] ;string-ref: returns the character in position k. k must be smaller than the length
     (palindrome(substring wordIn 1(- (string-length wordIn)1))) ; substring: a basic substring method that returns a new string when given two positions
     [else
     #f]))


(define word "Testing")
(palindrome word)

(define (casear wordIn keyVal pos)
  (cond
  [(< pos (string-length wordIn))
  (cons(integer->char (+ keyVal (char->integer (string-ref wordIn pos)))) ; the -> is how to convert data types, ie a interger to a character.
  (casear wordIn keyVal (add1 pos)))]))

(define word2 "abcde")
(casear word2 8 0)

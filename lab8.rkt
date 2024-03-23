#lang racket

(define(palindrome wordIn)
  (cond
   [(= (string-length wordIn) 0)#t]
   [(= (string-length wordIn) 1)#t]
    [(equal?(string-ref wordIn 0)(string-ref wordIn(-(string-length wordIn)1)))#t]
     (palindrome(substring wordIn 1(- (string-length wordIn)1)))
     [else
     #f]))


(define word "Testing")
(palindrome word)

(define (casear wordIn keyVal pos)
  (cond
  [(< pos (string-length wordIn))
  (cons(integer->char (+ keyVal (char->integer (string-ref wordIn pos))))
  (casear wordIn keyVal (add1 pos)))]))

(define word2 "abcde")
(casear word2 8 0)

#lang racket
(define point% (class object%(super-new)
                 (define/public (distance other)
                   (define other-x (send other get-x))
                   (define other-y (send other get-y))
                   (sqrt (+ (expt (- (send this get-x) other-x) 2)
                            (expt (- (send this get-y) other-y) 2))))
                 (define/public (distance-range other numIn)
                   (cond
                     [(>(send this distance other)numIn)#f]
                     [(<(send this distance other)numIn)#t]))
                 (define/public (triangle pointB pointC)
                   (+(send this distance pointB)(send this distance pointC)(send pointB distance pointC)))
                 (define/public (set-x nx) (set! x nx))
                 (define/public (set-y ny) (set! y ny))
                 (define/public (set-z nz) (set! z nz))
                 (define/public (get-x) x)
                 (define/public (get-y) y)
                 (define/public (get-z) z)
                 (init-field x y z)))
                

(define p1 (make-object point% 5 5 5))
(define p2 (make-object point% 8 8 8))
(define p3 (make-object point% 4 5 6))
(displayln (send p1 distance p2))
(displayln (send p1 distance-range p2 11))
(displayln (send p1 triangle p2 p3))

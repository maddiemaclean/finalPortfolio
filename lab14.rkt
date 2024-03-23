lang racket

(define (velocity time)
  ( + 32 (* -0.35 time )))

(define (velocity2 time)
  ( + 5 (* 0.5 time )))

(velocity2 5)

(define(sixty pos)
(cond
    [(= pos 60)'()]
    [else (cons pos (sixty( + 1 pos)))]))
    
      

(sixty 0)





(velocity 10)

(define (matching listA listB startPos)
  (cond
    [(or(empty? listA )(empty? listB))-1]
    [(<(abs(-(first listA)(first listB)))1)startPos]
    [(matching(rest listA)( rest listB)(+ startPos 1))]))



(define a (list 6 2 4 7 8 7 ))
(define b (list 1 5 7 3 10 9 ))


(matching a b 0 )

(define (same-speed vel1 vel2 sixty)
(matching (map vel1 sixty )(map vel2 sixty)0))


(same-speed 
velocity velocity2 (sixty 0))
  

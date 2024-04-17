#lang racket

(define node%(class object%
    (init-field [dataIn 1] [prevIn #f] [nextIn #f])
    (super-new)
     (define/public (get-value) dataIn)
     (define/public (get-prev) prevIn)
     (define/public (set-prev new-prev) (set! prevIn new-prev))
     (define/public (get-next) nextIn)
     (define/public (set-next new-next) (set! nextIn new-next))
     (define/public (node->list) (list dataIn prevIn nextIn))
     (define/public (set-value new-value) (set! dataIn new-value))
     (define/public (has-prev?) (not (false? prevIn)))
     (define/public (has-next?) (not (false? nextIn)))))

(define LinkedList(class object%
    (init-field [head #f] [tail #f])
     (define/public (get-head) head)
     (define/public (set-head new-head)(set! head new-head))
                    
     ; for when the list is empty and it needs to set the first node as the head to start the list
     (define/public (no-head value)
        (set! head (new node% [value value])))

     ; for when the value in is the new head
     (define/public (new-head value)
       (when head
        (let ([new-node (new node% [value value] [next head])])
          (set! head new-node)
          (when (send head get-next)
            (send (send head get-next) set-prev new-node)))))

     ; for when the value needs to be added to the middle of the list
     (define/public (add-in-order current new-node)
       (let ([next-node (send current get-next)])
            (<=( send new-node get-value) (send next-node get-value)))
               (send new-node set-prev current)
               (send new-node set-next (send new-node next-node))
               (send current set-next new-node))

     ; for when the value needs to be added to the end of the list
     (define/public (add-at-end current new-node)
       (send new-node set-prev current)
       (send current set-next new-node))

     ; this is the "driver" method which figures out which add method we need and executes it
     (define/public (add-node valueIn)
      (cond
         ;for when the list is empty and we need a head
         [empty?(no-head valueIn)]
         [else
            (let loop ([current head])
              (when current
                (cond
                  ; when the new node is the new head
                  [(<(valueIn (send head get-value)))(new-head valueIn)]
                  ;when the new node needs to be added in the middle
                  [(>(valueIn (send current get-value)))(add-in-order valueIn)]
                  ;when we need to add to the end of the list
                  [(null?(send current next-node))(add-at-end valueIn)]
                  ; if none of the conditions are met, moves to the next node in the list
                  [else
                   (loop (send current get-next))])))]))))

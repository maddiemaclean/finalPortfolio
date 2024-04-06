#lang racket
(define BST% (class object%(init root)
               (define/public (insert value)
                  (define(insert-helper nodeIn)
                    (cond
                      [(null? nodeIn)(set! root (new LetterNode%(value value)))]
                      [(<value(send nodeIn get-letter))
                       (if (send nodeIn get-left)
                        (insert-helper(send nodeIn get-left))
                         (send nodeIn set-left(new LetterNode%(value value))))]
                      [(>value(send nodeIn get-letter))
                       (if (send nodeIn get-right)
                        (insert-helper(send nodeIn get-right))
                         (send nodeIn set-right(new LetterNode%(value value))))]
                      [else(send nodeIn increment-frequency)])))

               (define/public (print-tree nodeIn)
                 (unless(null? nodeIn)
                   (print-tree(send nodeIn get-left))
                   (send nodeIn print)
                   (print-tree(send nodeIn get-right))))))

#lang racket
(define LetterNode%(class object%
                    (init [letterIn #f][frequencyIn 1][left #f][right #f])
                    (super-new)
                     (define/public (increment-frequency)
                       (set-frequency (+ (send this frequency) 1)))
                     (define/public (print)
                       (displayln(string-append (send this letter) ": " (send this frequency))))
                     (define/public (set-left leftIn)(set! left leftIn))
                     (define/public (set-right rightIn)(set! right rightIn))
                     (define/public (set-letter letterIn)(set! letter letterIn))
                     (define/public (set-frequency frequencyIn)(set! frequency frequencyIn))
                     (define/public (get-left)left)
                     (define/public (get-right)right)
                     (define/public (get-letter)letter)
                     (define/public (get-frequency)frequencyIn)))

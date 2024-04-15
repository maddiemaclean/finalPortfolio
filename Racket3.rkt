(define BST%
  (class object%
    (init [root #f]) ; Changed parameter name to root
    (define/public (insert value)
      (define (insert-helper nodeIn)
        (cond
          [(null? nodeIn)
           (set! root (new LetterNode% (value value)))] ; Fixed syntax error here
          [(char<? value (send nodeIn get-letter)) ; Changed <value to char<?
           (if (send nodeIn get-left)
               (insert-helper (send nodeIn get-left))
               (send nodeIn set-left (new LetterNode% (value value))))]
          [(char>? value (send nodeIn get-letter)) ; Changed >value to char>?
           (if (send nodeIn get-right)
               (insert-helper (send nodeIn get-right))
               (send nodeIn set-right (new LetterNode% (value value))))]
          [else
           (send nodeIn increment-frequency)])))
      (insert-helper root)) ; Added call to insert-helper with root parameter
      
    (define/public (print-tree nodeIn)
      (unless (null? nodeIn)
        (print-tree (send nodeIn get-left))
        (send nodeIn print)
        (print-tree (send nodeIn get-right)))))
  (define LetterNode%
    (class object%
      (init [letterIn #f] [frequencyIn 1] [left #f] [right #f])
      (super-new)
      (define/public (increment-frequency)
        (set-frequency (+ (send this get-frequency) 1)))
      (define/public (print)
        (displayln (string-append (send this get-letter) ": " (number->string (send this get-frequency)))))
      (define/public (set-left leftIn) (set! left leftIn))
      (define/public (set-right rightIn) (set! right rightIn))
      (define/public (set-letter letterIn) (set! letter letterIn))
      (define/public (set-frequency frequencyIn) (set! frequency frequencyIn))
      (define/public (get-left) left)
      (define/public (get-right) right)
      (define/public (get-letter) letter)
      (define/public (get-frequency) frequencyIn))))

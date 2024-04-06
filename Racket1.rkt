#lang slideshow
(require 2htdp/image)
(define colors(list "Red" "Orange" "Yellow" "Green" "Blue" "Purple"))
(define(cycle listIn)
  (cond
    [(empty? listIn)(void)]
    [else
     (cond
       [(even? (length listIn))
          (print (circle 20 "solid" (first listIn)))
          (cycle (rest listIn))]
          [else
           (print(rectangle 40 40 "solid" (first listIn)))
           (cycle (rest listIn))])]))
(cycle colors)
       

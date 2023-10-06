<?php

class HitPoint
{
    private $x;
    private $y;
    private $r;

    function __construct($x, $y, $r)
    {
        $this->x = $x;
        $this->y = $y;
        $this->r = $r;
    }

    function checkRectangle()
    {
        return ($this->x <= 0 && $this->y <= 0 and $this->x >= -$this->r && $this->y >= -$this->r);
    }

    function checkTriangle()
    {
        return ($this->x <= 0 && $this->y >= 0 && $this->y <= ($this->x + $this->r));
    }

    function checkCircle()
    {
        return ($this->x ** 2 + $this->y ** 2 <= $this->r ** 2 && $this->x >= 0 && $this->y <= 0);
    }

    function checkPoint()
    {
        return $this->checkRectangle() || $this->checkTriangle() || $this->checkCircle();
    }
}
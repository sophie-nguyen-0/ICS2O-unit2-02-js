//
// Created by: sophie nguyen
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function myButtonClicked() {
  document.getElementById("rectangle-dimensions").innerHTML =
    "<p>the dimensions are:7 cm and 12 cm</p>"
  document.getElementById("rectangle-area").innerHTML =
    "<p>the area is:" + 7 * 12 + "</p>"
  document.getElementById("rectangle-perimeter").innerHTML =
    "<p>the perimeter is:" + (12 + 7 * 2) + "</p>"
}

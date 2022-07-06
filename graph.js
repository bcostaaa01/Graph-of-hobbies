import * as d3 from "https://cdn.skypack.dev/d3@7";

let friends = [{name: "Bruno", age: 20}, {name: "Carl", age: 25}, {name: "John", age: 23}, {name: "Tim", age: 28}, {name: "Marco", age: 30}, {name: "Mary", age: 22}, {name: "Melanie", age: 20}]

let divSelection = d3.select("body")
.selectAll("div")

divSelection
  .data(friends)
  .enter()
  .append("div")
  .text(function (d) {return d.name + ": " + d.age + " years old"})
  .attr("class", "bar")
  .style("width", function (d) { return 50 * d.age + "px"})

function topRightWeb(){
    let a = dataset;//get old data set
    let b = [0,100,0,0];//variable im going to change it by
    let newDataset = a.map(function(x,i){  //i don't know howthis works but i add datasets
        return x.map(function(y,j){
            return y+b[j];
                        });
   
                   });



    let topRightBranch = [100, 100, topRightVariable, 0];
    let topRightLeftBranch = [100,100,topRightVariable+100,0];
    let topRightBottomBranch = [100, 100, topRightVariable+100,topRightVariable];

    
   //that changed the old data set
   newDataset.push(topRightBranch);  //then i add new datapoints
   newDataset.push(topRightLeftBranch);
   newDataset.push(topRightBottomBranch);

   console.log(newDataset); //check that shit out

   dataset = newDataset; //then i put it over here
     
   
      var clicked = svg.selectAll("circles")			//Select all bars
           .data(dataset);	//this keeps all the circles with their old id's 

           
       
       clicked.enter()  //then it updates everything
       .append("circle")
       .attr("cx", function(d) {
           return d[0]+d[2];
       })
      .attr("cy", function(d){
          return d[1]+d[3];
      })
      .attr("r", 15)
      .attr("fill","yellow")
      .attr("stroke","orange")
      .attr("id", function(d,i){
          return "circle" +i;
      });

      rightVariable++;

      let newTopRightCircle = svg.select("#circle"+ ( dataset.length -3))
      .attr("fill","green")
      .on("click", topRight);
}
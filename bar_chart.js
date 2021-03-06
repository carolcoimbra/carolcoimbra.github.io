	var bar_bases_de_dados2009 = ["bar_data/Norte2009.tsv", "bar_data/Nordeste2009.tsv" , "bar_data/CentOeste2009.tsv" ,"bar_data/Sudeste2009.tsv" ,"bar_data/Sul2009.tsv"];
	var bar_bases_de_dados2010 = ["bar_data/Norte2010.tsv", "bar_data/Nordeste2010.tsv" , "bar_data/CentOeste2010.tsv" ,"bar_data/Sudeste2010.tsv" ,"bar_data/Sul2010.tsv"];
	var bar_bases_de_dados2011 = ["bar_data/Norte2011.tsv", "bar_data/Nordeste2011.tsv" , "bar_data/CentOeste2011.tsv" ,"bar_data/Sudeste2011.tsv" ,"bar_data/Sul2011.tsv"];
	var bar_bases_de_dados2012 = ["bar_data/Norte2012.tsv", "bar_data/Nordeste2012.tsv" , "bar_data/CentOeste2012.tsv" ,"bar_data/Sudeste2012.tsv" ,"bar_data/Sul2012.tsv"];
	var bar_bases_de_dados2013 = ["bar_data/Norte2013.tsv", "bar_data/Nordeste2013.tsv" , "bar_data/CentOeste2013.tsv" ,"bar_data/Sudeste2013.tsv" ,"bar_data/Sul2013.tsv"];

	reload_bars(0,0, "#squareTwo");
	reload_bars(0,0, "#squareTwo2");
	
    function reload_bars(idYear, reg, div) {
		
	if(div == "#squareTwo"){
		
		var database = [];
		var colors = ["#29A03C", "#D2282B", "#FF800A", "#9562BE", "#2978B3"];
		var color_aux = 0;
		if(idYear == 0){
			database = bar_bases_de_dados2009[reg];
			colors_aux = colors[reg];
		}
		else if(idYear == 1){
			database = bar_bases_de_dados2010[reg];
			colors_aux = colors[reg];
		}
		else if(idYear == 2){
			database = bar_bases_de_dados2010[reg];
			colors_aux = colors[reg];
		}
		else if(idYear == 3){
			database = bar_bases_de_dados2010[reg];
			colors_aux = colors[reg];
		}
		else{
			database = bar_bases_de_dados2010[reg];
			colors_aux = colors[reg];
		}	


		var region;
	  	if(reg == 0)
	  	{
	  		region = "Top University Courses By Number Of Enrolled North "+ Year[idYear];
	  	}
	  	else if(reg == 1)
	  	{
	  		region = "Top University Courses By Number Of Enrolled Northeast "+ Year[idYear];
	  	}
	  	else if(reg == 2)
	  	{
	  		region = "Top University Courses By Number Of Enrolled Midwest "+ Year[idYear];
	  	}
	  	else if(reg == 3)
	  	{
	  		region = "Top University Courses By Number Of Enrolled Southeast "+ Year[idYear];
	  	}
	  	else if(reg == 4)
	  	{
	  		region = "Top University Courses By Number Of Enrolled South "+ Year[idYear];
	  	}


	  	d3.select("#bar_title_1").remove()
	  	var bar_title_1 = document.createElement("div");
        bar_title_1.id = "bar_title_1";

        document.body.appendChild(bar_title_1);

        bar_title_1.innerHTML = region;
        //////end of title






	
		d3.select(div).remove();
		
		var div_x = document.createElement("squareTwo");
		div_x.id = "squareTwo";

		document.body.appendChild(div_x);
	
		d3.tsv(database,
        function(error, data,div_x) {
            callbackError = error;
            callbackData = data;		
			
		if (div == "#squareTwo")
		{
			div_aux = "squareTwo";
		}
			
		var chart = document.getElementById(div_aux),
			axisMargin = 20,
			margin = 20,
			valueMargin = 4,
			width = chart.offsetWidth,
			height = chart.offsetHeight,
			barHeight = (height-axisMargin-margin*2)* 0.4/data.length,
			barPadding = (height-axisMargin-margin*2)*0.6/data.length,
			data, bar, svg, scale, xAxis, labelWidth = 0;
		
		
		var max = data[0].Enrolled;
		
	
		svg = d3.select(chart)
		  .append("svg")
		  .attr("width", width)
		  .attr("height", height);


		bar = svg.selectAll("g")
		  .data(data)
		  .enter()		  
		  .append("g");

		bar.attr("class", "bar")
		  .attr("cx",0)
		  .attr("transform", function(data, i) { 
			 return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
		  });

		bar.append("text")
		  .attr("class", "label")
		  .attr("y", barHeight / 2)
		  .attr("dy", ".35em") //vertical align middle
		  .text(function(data){
			return data.Major;
		  }).each(function() {
			labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
		  });

		scale = d3.scale.linear()
		  .domain([0, max])
		  .range([0, width - margin*2 - labelWidth - 15]);
		

		bar.append("rect")		  
		  .attr("transform", "translate("+labelWidth+", 0)")
		  .attr("height", barHeight)
		  .attr("width", 0);

		  bar.selectAll("rect")
		  .transition()
		  .duration(1000)		  
		  .attr("width", function(data){
			return scale(data.Enrolled)- 5;
		  })

		  .attr("fill", colors_aux);

		bar.append("text")

		  .attr("class", "value")
		  .attr("y", barHeight / 2)
		  .attr("dx", 35 + labelWidth) //margin right
		  .attr("dy", ".35em") //vertical align middle
		  .attr("text-anchor", "end")
		  .text(function(data){
			return data.Enrolled;
		  })
		 .attr("x", function(data){
			var width = this.getBBox().width;
			return Math.max(width + valueMargin, scale(data.Enrolled));
		  });
	
		xAxis = d3.svg.axis()
		  .scale(scale)
		  .tickSize(-height + 2*margin + axisMargin + 191)
		  .orient("bottom")
		  .ticks(4);
		  
		svg.insert("g",":first-child")
		 .attr("class", "axis")
		 .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
		 .call(xAxis);
		});
		
    }
	else if(div == "#squareTwo2"){
		var database = [];
		var colors = ["#29A03C", "#D2282B", "#FF800A", "#9562BE", "#2978B3"];
		var color_aux = 0;
		if(idYear2 == 0){
			database = bar_bases_de_dados2009[reg];
			colors_aux = colors[reg];
		}
		else if(idYear2 == 1){
			database = bar_bases_de_dados2010[reg];
			colors_aux = colors[reg];
		}
		else if(idYear2 == 2){
			database = bar_bases_de_dados2010[reg];
			colors_aux = colors[reg];
		}
		else if(idYear2 == 3){
			database = bar_bases_de_dados2010[reg];
			colors_aux = colors[reg];
		}
		else{
			database = bar_bases_de_dados2010[reg];	
			colors_aux = colors[reg];
		}
	

		var region;
	  	if(reg == 0)
	  	{
	  		region = "Top University Courses By Number Of Enrolled North "+ Year[idYear2];
	  	}
	  	else if(reg == 1)
	  	{
	  		region = "Top University Courses By Number Of Enrolled Northeast "+ Year[idYear2];
	  	}
	  	else if(reg == 2)
	  	{
	  		region = "Top University Courses By Number Of Enrolled Midwest "+ Year[idYear2];
	  	}
	  	else if(reg == 3)
	  	{
	  		region = "Top University Courses By Number Of Enrolled Southeast "+ Year[idYear2];
	  	}
	  	else if(reg == 4)
	  	{
	  		region = "Top University Courses By Number Of Enrolled South "+ Year[idYear2];
	  	}


	  	d3.select("#bar_title_2").remove()
	  	var bar_title_2 = document.createElement("div");
        bar_title_2.id = "bar_title_2";

        document.body.appendChild(bar_title_2);

        bar_title_2.innerHTML = region;


		d3.select(div).remove();
		
		var div_x = document.createElement("squareTwo2");
		div_x.id = "squareTwo2";

		document.body.appendChild(div_x);
	
		d3.tsv(database,
        function(error, data,div_x) {
            callbackError = error;
            callbackData = data;		
			
		if (div == "#squareTwo2")
		{
			div_aux = "squareTwo2";
		}
			
		var chart = document.getElementById(div_aux),
			axisMargin = 20,
			margin = 20,
			valueMargin = 4,
			width = chart.offsetWidth,
			height = chart.offsetHeight,
			barHeight = (height-axisMargin-margin*2)* 0.4/data.length,
			barPadding = (height-axisMargin-margin*2)*0.6/data.length,
			data, bar, svg, scale, xAxis, labelWidth = 0;
		
		
		var max = data[0].Enrolled;
		
	
		svg = d3.select(chart)
		  .append("svg")
		  .attr("width", width)
		  .attr("height", height);


		bar = svg.selectAll("g")
		  .data(data)
		  .enter()		  
		  .append("g");

		bar.attr("class", "bar")
		  .attr("cx",0)
		  .attr("transform", function(data, i) { 
			 return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
		  });

		bar.append("text")
		  .attr("class", "label")
		  .attr("y", barHeight / 2)
		  .attr("dy", ".35em") //vertical align middle
		  .text(function(data){
			return data.Major;
		  }).each(function() {
			labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
		  });

		scale = d3.scale.linear()
		  .domain([0, max])
		  .range([0, width - margin*2 - labelWidth - 15]);
		

		bar.append("rect")		  
		  .attr("transform", "translate("+labelWidth+", 0)")
		  .attr("height", barHeight)
		  .attr("width", 0);

		  bar.selectAll("rect")
		  .transition()
		  .duration(1000)		  
		  .attr("width", function(data){
			return scale(data.Enrolled)- 5;
		  })

		  .attr("fill", colors_aux);

		bar.append("text")

		  .attr("class", "value")
		  .attr("y", barHeight / 2)
		  .attr("dx", 35 + labelWidth) //margin right
		  .attr("dy", ".35em") //vertical align middle
		  .attr("text-anchor", "end")
		  .text(function(data){
			return data.Enrolled;
		  })
		 .attr("x", function(data){
			var width = this.getBBox().width;
			return Math.max(width + valueMargin, scale(data.Enrolled));
		  });
	
		xAxis = d3.svg.axis()
		  .scale(scale)
		  .tickSize(-height + 2*margin + axisMargin + 191)
		  .orient("bottom")
		  .ticks(4);
		  
		svg.insert("g",":first-child")
		 .attr("class", "axis")
		 .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
		 .call(xAxis);
		});
	}
	}
	

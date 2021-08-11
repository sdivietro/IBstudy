define(['pipAPI', 'https://raw.githubusercontent.com/sdivietro/IBstudy/main/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'bf14_nc.jpg'}, 
    		    {image : 'bf23_nc.jpg'}, 
    		    {image : 'bf56_nc.jpg'},
    		    {image : 'bm14_nc.jpg'},
    		    {image : 'bm23_nc.jpg'},
    		    {image : 'bm56_nc.jpg'},
    		    {image : 'BF_13.jpg'},
    		    {image : 'BF_14.jpg'},
    		    {image : 'BF_15.jpg'},
    		    {image : 'BF_16.jpg'},
    		    {image : 'BM_09.jpg'},
    		    {image : 'BM_10.jpg'},
    		    {image : 'BM_11.jpg'},
    		    {image : 'BM_12.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'wf2_nc.jpg'}, 
    		    {image : 'wf3_nc.jpg'}, 
    		    {image : 'wf6_nc.jpg'}, 
    		    {image : 'wm1_nc.jpg'}, 
    		    {image : 'wm4_nc.jpg'}, 
    		    {image : 'wm6_nc.jpg'}, 
    		    {image : 'WF_05.jpg'},  
    		    {image : 'WF_06.jpg'},  
    		    {image : 'WF_07.jpg'},  
    		    {image : 'WF_08.jpg'},  
    		    {image : 'WM_01.jpg'},  
    		    {image : 'WM_02.jpg'},  
    		    {image : 'WM_03.jpg'},  
    		    {image : 'WM_04.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://raw.githubusercontent.com/atheris/IBstudy/main/images/'
		} 
	});
});

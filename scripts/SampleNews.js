const currentPageStr = "landing";

window.onload = function () {
	const collectionId = fetchCollectionIdOfPage(currentPageStr);
	fetchAndDisplayArticlesInPage(collectionId);
}

function fetchCollectionIdOfPage(currentPageStr){
	//Ajax or API call- Response from json
	let responseCollectionId = "";
	const response = collections;
	Object.values(response)[0].forEach( element => {
	  if(element.collectiontype === currentPageStr){
		responseCollectionId = element.collectionid;
	  }
	});
	return responseCollectionId;
}

function fetchAndDisplayArticlesInPage(collectionId){
//API call to fetch articles based on the collection id from json
  const response = articles;
  let responseHTML = "";
  Object.values(response)[0].forEach( (element,index,array) => {
	responseHTML = ` ${responseHTML}   <div class="fp-cell fp-cell--${index === 0 ? 1 : 2}">
							<div class="fp-item" ${element.main ? '' : 'style="overflow:hidden"'}>
								<p><img class="${element.main ? 'contentImg' : 'sideDivImg'}" src="${element.Imageurl}" /></p>
								<p class="${element.main ? 'contentTitle' : 'sideDivTitle'}"  ><img class="newsImg" src="images/news.png" /> ${element.Title}</p>
								<p class="maincontent" >${element.Content}</p>
								${ !element.main ? "<div class='sideDivBtmSection'>" : ''}
								<p><span class="timer"> <img src='images/timer.png' class="timerImg"/>${element.Published}</span> 
								${element.main ? "<span> <img src='images/comment.png' class='comment'/></span>" : ''} </p>
								${ !element.main ? "</div>" : ''}
							  </div>
						</div>`;
  })
  document.getElementById("mainContentDiv").innerHTML = responseHTML;
}

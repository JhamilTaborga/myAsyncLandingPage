const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCIOrqZLQiXzIK_2LnhkLO6g&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bc5b3895eemshdb1f99101cf1a12p11334djsnda942b02ca32',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

/* try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
 */

// Código hecho en clase //
async function fetchData (urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
	return data;
}

(async () => {
	try {
		const videos = await fetchData(API);
		let view = `
			${videos.items.map(video => `
				<div class="group relative">
          		<div
            		class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            		<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          		</div>
          		<div class="mt-4 flex justify-between">
            		<h3 class="text-sm text-gray-700">
              			<span aria-hidden="true" class="absolute inset-0"></span>
              			${video.snippet.title}
            		</h3>
          		</div>
        		</div>
			`).slice(0,4).join('')}
			
		`;
		content.innerHTML = view;
	}	catch (error) {
		console.log(error);
	}
})();

import http from 'k6/http'
import {check, sleep} from 'k6'

export const options = {
	stages: [
	//ramp 1 to 50 VU in 60 s
	{duration:'60s', target:50},
	{duration:'120s',target:100},
	{duration:'30s',target:0}
	],
	thresholds:{
		http_req_duration:[
		{
			threshold: 'p(90) < 15000',
			abortOnFail: true,
			delayAbortEval: 100
		}
		]
	}
}

export default function(){
	const response http.get('')
	check(response,{"status is 200":(r) => r.status === 200})
	sleep(.300)
}


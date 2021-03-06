import React from 'react';
import styled from 'styled-components';

const Eye = () => {
	return (
		<Eyelid>
			<div className="sclera">
				<div className="iris">
					<div className="pupil">&nbsp;</div>
				</div>
			</div>
		</Eyelid>
	);
};
const Eyelid = styled.div`
	* {
		box-sizing: border-box;
	}
	position: fixed;
	z-index: 50;
	top: 15px;
	left: 5px;
	height: 47px;
	width: 47px;
	border-radius: 50%;
	overflow: hidden;
	border: solid 1px grey;
	-moz-animation: blinking-eye 5s infinite;

	@keyframes blinking-eye {
		0%,
		75%,
		100% {
			height: 65px;
			top: 0;
		}
		85.7142857% {
			height: 2px;
			top: 33.5px;
		}
	}

	.sclera {
		background: white;
		width: 55px;
		height: 55px;
		position: relative;
	}

	@keyframes searching-eye {
		0%,
		85.714285716%,
		100% {
			top: 17.5%;
			left: 17.5%;
		}
		14.285714286% {
			top: 17.5%;
			left: 8%;
		}
		28.571428572% {
			top: 30%;
			left: 8%;
		}
		42.857142858% {
			top: 30%;
			left: 30%;
		}
		57.142857144% {
			top: 8%;
			left: 30%;
		}
		71.42857143% {
			top: 8%;
			left: 8%;
		}
		85.7142857% {
			top: 0%;
			left: 17.5%;
		}
	}

	.iris {
		background: #0091ea;
		border-radius: 50%;
		height: 55%;
		width: 55%;
		padding: 12%;
		position: relative;
		top: 17.5%;
		left: 17.5%;
		-moz-animation: searching-eye 5s infinite;
		animation: searching-eye 5s infinite;
		animation-direction: alternate;
	}

	.pupil {
		background: black;
		border-radius: 50%;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.pupil::after {
		display: block;
		content: '';
		background: white;
		border-radius: 50%;
		height: 32%;
		width: 32%;
		position: absolute;
		top: 10%;
		right: 10%;
	}

	@-webkit-keyframes NAME-YOUR-ANIMATION {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-moz-keyframes NAME-YOUR-ANIMATION {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-o-keyframes NAME-YOUR-ANIMATION {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes NAME-YOUR-ANIMATION {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export default Eye;

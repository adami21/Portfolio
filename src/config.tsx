import React from 'react'
const github_username = 'adami21'
const discord_usertag = '5kg'
const discord_userid = '157839368453750784'
const email = 'adam.amira.1@ulaval.ca'

const projects = [
	'adami21/Conception-d-un-h-ritage-de-classes-en-C-',
	'adami21/Gestionnaire-de-portefeuille-d-actions-',
]

const links = [
	{
		name: 'Linkedin',
		icon: 'fab fa-fw fa-linkedin-in',
		link: 'https://www.linkedin.com/in/adam-amira-508359336/',
		description: 'Connect with me!',
	},
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/adami21',
		description: 'My Github profile',
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
	{
		name: 'Resume',
		icon: 'fas fa-fw fa-file',
		link: `https://ulavaldti-my.sharepoint.com/:w:/r/personal/adami2_ulaval_ca/_layouts/15/doc2.aspx?sourcedoc=%7BDA07DD6A-C14E-4B13-B60F-30D97AC1C87C%7D&file=CV%20Adam%20Amira.docx&action=default&mobileredirect=true&wdOrigin=MARKETING.WORD.SIGNIN%2CAPPHOME-WEB.JUMPBACKIN&wdPreviousSession=ced17306-13f9-4004-abb9-45ab1c9f9c73&wdPreviousSessionSrc=AppHomeWeb&ct=1736889017285`,
		description: 'Here\'s my resume!',
	},
]

const info = (
	<>
		<div style={{ lineHeight: '30px' }}>
			<p>Hi!👋</p><br></br>
			<p>
			   I'm <span className="highlighted">Adam Amira</span>,  a passionate Computer Science student from Laval University. With a strong foundation in programming and system management, I thrive in dynamic environments where innovation drives excellence. My academic journey and hands-on projects have equipped me with the technical expertise and collaborative spirit necessary to tackle complex challenges.
			</p>
			<p>
			Currently pursuing my bachelor's degree in Computer Science, I've acquired advanced skills in programming languages like Python and C++, alongside a deep understanding of object-oriented design. One of my key projects involved developing a robust software tool for federal election management, where I enhanced my problem-solving abilities and teamwork.
			</p><br></br>
			<p>
			My curiosity for the latest technological advancements fuels my drive to explore areas like artificial intelligence and secure, high-performance application development. I'm constantly refining my skills to integrate innovative solutions into real-world scenarios.
			</p><br></br>
			<p>
			    Here's a list of some of the technologies I've been working with recently 
			   (it's only from my public repos, so it's not exhaustive  ):
			</p> <br></br>
			<img alt="stats" style={{
								display: 'block',
								marginLeft: 'auto',
								marginRight: 'auto',
							}} 
  				src="https://github-readme-stats.vercel.app/api/top-langs/?username=abdellahhn&show_icons=true&theme=dark&bg_color=0A0A0A&locale=en"/>
		</div>
	</>
)

export {
	github_username,
	discord_usertag,
	discord_userid,
	email,
	projects,
	links,
	info,
}

import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}<a href={education.website}>{education.websitetext}</a></p></div>
      })
      var work = this.props.data.work.map(function(work){
        if (work.title2){
          return <div key={work.company}>
              <h3>{work.company}</h3>
              <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
              <p>{work.description}</p>
              <p className="info">{work.title2}<span>&bull;</span> <em className="date">{work.years2}</em></p>
              <p>{work.description2}</p>
          </div>
        }
        else {
          return <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
            </div>
        }
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      var skillslist = this.props.data.skills.map(function(skills){
        return <p className="skill">&bull; {skills.name}</p>
      })
      var onlineclasses = this.props.data.onlineclasses.map(function(onlineclass){
        return <p className="info">{onlineclass.name}<span>&bull;</span><em className="date">{onlineclass.date}</em></p>
      })
    }

    return (
      <section id="resume">


      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
                 <h3>Udemy</h3>
                 {onlineclasses}
               </div>
            </div>
         </div>
      </div>

      <div className="row skills">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <h3>{skillmessage}</h3>
            {skillslist}
        
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;

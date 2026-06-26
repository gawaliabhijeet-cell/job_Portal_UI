import React from 'react'
import Card from './components/Card';

export default function App() {
  
const jobs = [
  {
    id: 1,
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bengaluru, India",
  },
  {
    id: 2,
    brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    brandLogo: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 4,
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Cupertino, USA",
  },
  {
    id: 5,
    brandLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
    company: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    id: 6,
    brandLogo: "https://i.pinimg.com/1200x/f6/97/4e/f6974e017d3f6196c4cbe284ee3eaf4e.jpg",
    company: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Los Gatos, USA",
  },
  {
    id: 7,
    brandLogo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Noida, India",
  },
  {
    id: 8,
    brandLogo: "https://i.pinimg.com/1200x/2f/84/62/2f846269b731a798c6cc3338b04131f2.jpg",
    company: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$170/hr",
    location: "Pune, India",
  },
  {
    id: 9,
    brandLogo: "https://i.pinimg.com/736x/2c/ea/3e/2cea3e7494f8f6f763216b708c21f4f2.jpg",
    company: "Uber",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Bengaluru, India",
  },
  {
    id: 10,
    brandLogo: "https://i.pinimg.com/1200x/07/91/6e/07916e8763ff503f2965b9a5b9622215.jpg",
    company: "Salesforce",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$115/hr",
    location: "Pune, India",
  },
];

  return (
  <div className='flex-wrap flex items-center m-10 '>
    {jobs.map(function(job){
      return <Card key={job.id} jobs={job} />
    })}
  </div>
  )
}

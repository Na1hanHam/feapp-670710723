import Header from './components/Header';
import Movielist from './components/Movielist';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';

const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
   { id: 2, name: 'สมชาย เจ๋งแจ๋ว', nickname: 'กาย',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['หมา', 'โอวัลติน', 'เล่นเกม'] },

     { id: 3, name: 'มะแม่ว บรรจบ', nickname: 'แม่ว',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ท่องเที่ยว', 'เดินป่า', 'ถ่ายรูป'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
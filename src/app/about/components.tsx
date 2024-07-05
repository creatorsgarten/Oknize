'use client';
// This file has been sourced from: /Users/betich/code/work/Creatorsgarten/Oknize/src/pages/about/index.tsx
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import Link from 'next/link';

const About = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 p-4 pt-8 text-xl lg:p-16 lg:pb-0">
                    <h1 className="px-4 text-3xl font-semibold">
                        🙌 โดยผู้จัดอีเวนต์ เพื่อผู้จัดอีเวนต์
                    </h1>
                    <p>
                        👌🏻 oknize (โอ-เค-ไนซ์) เป็นแพลตฟอร์มของคนทำอีเวนต์
                        ที่คิดมาเพื่อคนทำอีเวนต์
                        จากประสบการณ์ตรงของผู้จัดอีเวนต์ให้ตอบโจทย์คนทำอีเวนต์ให้ได้มากที่สุด
                    </p>
                    <p>
                        เราเข้าใจถึงปัญหาและความยุ่งยากของการเริ่มทำอีเวนต์เป็นอย่างดี
                        ไม่ว่าจะเป็นอีเวนต์ของคุณจะมีขนาดเท่าไหร่
                        แต่คงไม่พ้นกับปัญหาจุกจิกที่น่ากวนใจเราทุกคน
                    </p>
                    <p>
                        เรา
                        ทำให้คุณมีพื้นที่ที่สามารถออกแบบและจัดการอีเวนต์ของคุณได้แบบครบวงจร
                        ตั้งแต่ ก่อนจัดงาน - วันงาน - ไปจนถึงหลังจบงาน
                        เพราะเรารู้ว่าเวลาของคุณมีค่า
                        คุณจะได้พึ่งพาแพลตฟอร์มอื่นๆ น้อยลง{' '}
                    </p>
                    <p>
                        เรา อยากเห็นอีเวนต์ของคุณ
                        ประสบความสำเร็จอย่างที่คุณต้องการ
                        เพราะเราเห็นว่าประสบการณ์ผู้เข้าร่วมงานของคุณ
                        เป็นสิ่งที่คุณต้องการ
                    </p>
                    <p>
                        &quot;เพราะการมีอีเวนต์ คือการบ่งบอกความเป็นมนุษย์&quot;
                    </p>
                </div>
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 p-6 pt-10 text-xl lg:p-16 lg:pb-4">
                    <h1 className="px-4 text-3xl font-semibold">
                        🏃🏻 ก้าวต่อไปของเรา
                    </h1>
                    <p>ทางแก้สำหรับปัญหาต่อ ๆ ไป</p>
                    <p>
                        Step 1: ควบคุม Agenda ภายในวันงานให้สามารถใช้งานได้แบบ
                        Dynamic เมื่อมีการเปลี่ยนแปลงสล็อตเวลาของ Task นั้นๆ -
                        ฐานข้อมูลอีเวนต์ ให้จัดการได้แบบง่ายๆ (เราอยู่ที่นี่)
                    </p>
                    <p>
                        Step 2: - เพิ่มการแจ้งเตือนให้กับ User
                        เมื่อมีการเปลี่ยนแปลง Task ให้สตาฟที่เข้ามาในระบบแล้ว -
                        เพิ่มรายละเอียดการตั้งค่าอีเวนต์ตอนเริ่มงาน -
                        ระบบจัดการสตาฟ
                    </p>
                    <p>
                        Step 3: - สร้างเทมเพลตเอกสารพร้อมใช้งาน เช่น
                        เอกสารการใช้งานสถานที่ หรือ การทำบิล -
                        วิเคราะห์ข้อมูลหลังจบงาน - เทมเพลตอีเวนต์ -
                        เชื่อมต่อกับระบบของ Social Media
                    </p>
                    <p>
                        Step 4: - เชื่อมต่อแพลตฟอร์มอีเวนต์ และ
                        เครื่องมือช่วยจัดการงานเข้าด้วยกัน
                    </p>
                    <h3 className="p-3 font-semibold text-purple-500">
                        <Link href="/">กลับหน้าหลัก &gt;</Link>
                    </h3>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;

import { 
  BarChart3, 
  Map, 
  Rocket, 
  Settings, 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  Quote, 
  ChevronRight,
  Menu,
  X,
  Mail,
  Share2,
  Globe2,
  Flag,
  Zap,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-outline-variant">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container font-sans tracking-tight">
              Hy Maxpro
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-bold text-sm uppercase tracking-wider">
            <a href="#services" className="text-on-surface hover:text-primary transition-colors">Dịch vụ</a>
            <a href="#funnel" className="text-on-surface hover:text-primary transition-colors">Phễu tăng trưởng</a>
            <a href="#kpis" className="text-on-surface hover:text-primary transition-colors">Chỉ số KPI</a>
            <a href="#roadmap" className="text-on-surface hover:text-primary transition-colors">Lộ trình</a>
            <a href="#advantages" className="text-on-surface hover:text-primary transition-colors">Ưu thế</a>
            <button className="bg-primary text-white px-6 py-2 rounded-sm font-bold hover:bg-primary-container transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
              Liên hệ
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-on-surface" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-outline-variant px-6 py-6 flex flex-col gap-4 font-sans font-bold"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Dịch vụ</a>
            <a href="#funnel" onClick={() => setIsMenuOpen(false)}>Phễu tăng trưởng</a>
            <a href="#kpis" onClick={() => setIsMenuOpen(false)}>Chỉ số KPI</a>
            <a href="#roadmap" onClick={() => setIsMenuOpen(false)}>Lộ trình</a>
            <a href="#advantages" onClick={() => setIsMenuOpen(false)}>Ưu thế</a>
          </motion.nav>
        )}
      </header>

      <main className="max-w-[1100px] mx-auto px-6">
        {/* Hero Section */}
        <section className="py-section-gap grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block self-start px-3 py-1 bg-secondary-container text-secondary text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
              Chiến lược 2024
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] text-on-surface">
              Chiến lược Kinh doanh <span className="text-primary">Hy Maxpro</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Thúc đẩy tăng trưởng thông qua đổi mới chiến lược, sự xuất sắc dựa trên dữ liệu và các sáng kiến chuyển đổi dẫn đầu thị trường. Chúng tôi định nghĩa lại các giới hạn để mở rộng tầm nhìn của bạn trên toàn cầu.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-white h-14 px-10 rounded-sm font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Bắt đầu ngay
              </button>
              <button className="border-2 border-outline-variant text-on-surface h-14 px-10 rounded-sm font-bold text-lg hover:bg-surface-container transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl h-[450px] md:h-[550px]"
          >
            <img 
              alt="Hồ sơ văn phòng hiện đại" 
              className="w-full h-full object-cover blur-[1px] brightness-75 scale-105" 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <p className="text-white font-sans text-sm tracking-widest uppercase mb-1">Toàn cầu hoá</p>
              <p className="text-white text-2xl font-bold">Giải pháp cho sự thịnh vượng</p>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-section-gap" id="services">
          <div className="mb-16 border-l-8 border-primary pl-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dịch vụ Cốt lõi</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Các giải pháp toàn diện được thiết kế để đẩy nhanh chuỗi giá trị và tối ưu hóa hệ thống vận hành doanh nghiệp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-outline-variant bg-outline-variant">
            {[
              { icon: BarChart3, title: "Phân tích Thị trường", color: "text-primary", desc: "Phân tích sâu các xu hướng thị trường và bối cảnh cạnh tranh để xác định các cơ hội chưa được khai phá." },
              { icon: Map, title: "Thiết kế Chiến lược", color: "text-secondary", desc: "Các bản kế hoạch tăng trưởng được tùy chỉnh phù hợp với mục tiêu tổ chức duy nhất của bạn." },
              { icon: Rocket, title: "Chuyển đổi Số", color: "text-tertiary", desc: "Hiện đại hóa nền tảng công nghệ và tự động hóa quy trình để đạt hiệu quả vận hành tối đa." },
              { icon: Settings, title: "Vận hành Xuất sắc", color: "text-error-custom", desc: "Tối ưu hóa quy trình nội bộ để giảm thiểu trở ngại và tối đa hóa đầu ra giữa các phòng ban." },
              { icon: ShieldCheck, title: "Định vị Thương hiệu", color: "text-primary-container", desc: "Xác định sự hiện diện trên thị trường thông qua kể chuyện hấp dẫn và nhận diện thương hiệu chiến lược." },
              { icon: Globe, title: "Mở rộng Toàn cầu", color: "text-secondary", desc: "Mở rộng quy mô xuyên biên giới với các thông tin chi tiết địa phương và khung quốc tế vững chắc." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 flex flex-col gap-6 hover:bg-primary/5 transition-colors group"
              >
                <service.icon className={`${service.color} w-12 h-12 transition-transform group-hover:scale-110`} strokeWidth={1.5} />
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-tighter">
                  Khám phá thêm <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Growth Funnel Section */}
        <section className="py-section-gap" id="funnel">
          <div className="bg-surface-container-low p-12 md:p-20 rounded-2xl border border-outline-variant">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Phễu Tăng trưởng</h2>
              <p className="text-xl text-on-surface-variant">Phương pháp 4 bước để đạt được quy mô bền vững.</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-outline-variant"></div>
              <div className="grid md:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "1", title: "Khám phá", desc: "Kiểm tra ban đầu và thu thập dữ liệu để căn chỉnh chiến lược.", color: "bg-primary" },
                  { step: "2", title: "Lập kế hoạch", desc: "Xây dựng lộ trình và xác định các chỉ số thành công then chốt.", color: "bg-secondary" },
                  { step: "3", title: "Thực thi", desc: "Triển khai các thay đổi cốt lõi và theo dõi hiệu suất thực tế.", color: "bg-tertiary" },
                  { step: "4", title: "Tối ưu hoá", desc: "Cải tiến lặp lại để đảm bảo ROI và tăng trưởng dài hạn.", color: "bg-primary-container" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center gap-6"
                  >
                    <div className={`${item.color} w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold border-8 border-white shadow-xl`}>
                      {item.step}
                    </div>
                    <h4 className="text-2xl font-bold">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KPIs & Revenue */}
        <section className="py-section-gap grid lg:grid-cols-5 gap-16" id="kpis">
          <div className="lg:col-span-3">
            <div className="mb-12 border-l-8 border-secondary pl-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Chỉ số Then chốt</h2>
              <p className="text-on-surface-variant">Thành tựu và tác động đo lường được từ các dự án chiến lược gần đây.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { val: "20+", label: "Hội thảo Chiến lược", color: "bg-secondary-container/30 border-secondary" },
                { val: "500+", label: "Người tham gia Tích cực", color: "bg-primary/5 border-primary" },
                { val: "94%", label: "Tỷ lệ Thành công", color: "bg-tertiary/10 border-tertiary" },
                { val: "15M+", label: "Tác động Doanh thu", color: "bg-surface-container-highest/5 border-outline" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className={`${stat.color} p-8 rounded-lg border-l-[12px] flex flex-col justify-center`}
                >
                  <div className="text-5xl font-bold mb-2">{stat.val}</div>
                  <div className="text-lg font-bold font-sans tracking-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white border border-outline-variant p-10 rounded-sm shadow-sm">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              Cấu trúc Doanh thu
            </h3>
            <div className="space-y-10">
              {[
                { label: "Cấp phép SaaS", pct: 45, color: "bg-primary" },
                { label: "Tư vấn Chiến lược", pct: 30, color: "bg-secondary" },
                { label: "Dịch vụ Quản lý", pct: 15, color: "bg-tertiary" },
                { label: "Phí Tư vấn định kỳ", pct: 10, color: "bg-error-custom" },
              ].map((row, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-3 text-lg font-bold">
                    <span>{row.label}</span>
                    <span className="text-on-surface-variant">{row.pct}%</span>
                  </div>
                  <div className="w-full bg-surface-container h-4 rounded-full overflow-hidden">
                    <motion.div 
                      className={`${row.color} h-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-section-gap" id="roadmap">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lộ trình Chiến lược 12 Tháng</h2>
            <p className="text-xl text-on-surface-variant">Tầm nhìn thực thi cho năm tài chính tiếp theo.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-outline-variant hidden md:block"></div>
            <div className="space-y-24 relative">
              {[
                { q: "Quý 1", icon: Flag, title: "Nền tảng & Kiểm toán", body: "Thiết lập các chỉ số cơ bản, thực hiện phân tích sâu tổ chức và hoàn thiện khung thực thi.", color: "bg-primary" },
                { q: "Quý 2", icon: Zap, title: "Giai đoạn Triển khai", body: "Triển khai cơ sở hạ tầng số, ra mắt các dự án thí điểm và bắt đầu hội thảo quản trị thay đổi.", color: "bg-secondary", reverse: true },
                { q: "Quý 3", icon: TrendingUp, title: "Mở rộng & Tối ưu", body: "Mở rộng các dự án thành công ra toàn bộ quy mô doanh nghiệp và tinh chỉnh logic tự động hoá.", color: "bg-tertiary" },
                { q: "Quý 4", icon: Star, title: "Đánh giá & Tầm nhìn", body: "Đánh giá hiệu suất cuối năm so với KPI và lập kế hoạch chiến lược cho tương lai.", color: "bg-error-custom", reverse: true },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${item.reverse ? 'text-left' : 'text-right'} hidden md:block`}>
                    <h4 className={`text-3xl font-bold mb-1 ${item.color.replace('bg-', 'text-')}`}>{item.q}</h4>
                    <p className="text-on-surface-variant font-bold">{item.title}</p>
                  </div>
                  <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center relative z-10 border-4 border-white shadow-xl`}>
                    <item.icon className="text-white w-8 h-8" />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, x: item.reverse ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 bg-white p-10 border border-outline-variant rounded-sm shadow-sm relative"
                  >
                    <div className="md:hidden mb-4">
                      <h4 className={`text-2xl font-bold ${item.color.replace('bg-', 'text-')}`}>{item.q} - {item.title}</h4>
                    </div>
                    <p className="text-xl leading-relaxed text-on-surface">
                      {item.body}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages & Risks */}
        <section className="py-section-gap grid md:grid-cols-2 gap-12" id="advantages">
          <div className="bg-secondary-container/20 p-12 border-t-8 border-secondary rounded-b-lg">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <CheckCircle2 className="text-secondary w-10 h-10" />
              Ưu thế Chiến lược
            </h3>
            <ul className="space-y-6">
              {[
                "Mô hình dự báo dựa trên dữ liệu độc quyền.",
                "Các đội ngũ triển khai linh hoạt (Agile) để thực thi nhanh chóng.",
                "Mạng lưới đối tác ngành toàn cầu sâu rộng."
              ].map((li, i) => (
                <li key={i} className="flex items-start gap-4 text-xl font-bold">
                  <CheckCircle2 className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 p-12 border-t-8 border-error-custom rounded-b-lg">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <AlertTriangle className="text-error-custom w-10 h-10" />
              Rủi ro Quan trọng
            </h3>
            <ul className="space-y-6">
              {[
                "Thị trường biến động ảnh hưởng đến dự báo dài hạn.",
                "Thay đổi quy định pháp lý tại các thị trường mới nổi.",
                "Mối đe dọa an ninh mạng trong các tích hợp công nghệ."
              ].map((li, i) => (
                <li key={i} className="flex items-start gap-4 text-xl font-bold">
                  <AlertTriangle className="text-error-custom w-6 h-6 mt-1 flex-shrink-0" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-section-gap">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-16 md:p-24 rounded-2xl relative overflow-hidden text-center shadow-2xl"
          >
            {/* Subtle overlay gradients for depth */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <Quote className="w-16 h-16 text-white/20 mx-auto mb-10" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight mb-12 max-w-4xl mx-auto font-serif tracking-tight text-white drop-shadow-sm">
                "Chiến lược không chỉ là về việc bạn đi đâu, mà là <span className="text-secondary-container not-italic">cách bạn trao quyền</span> cho nhân viên của mình để đạt được điều đó."
              </h2>
              
              <div className="flex flex-col items-center gap-6">
                <div className="h-[2px] w-16 bg-white/30" />
                <div className="space-y-1">
                  <p className="text-2xl font-bold tracking-[0.2em] font-sans text-white">— BAN LÃNH ĐẠO HY MAXPRO</p>
                  <p className="text-sm font-bold tracking-[0.4em] uppercase text-white/50 font-sans">Tầm nhìn & Sứ mệnh 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest mt-section-gap py-20">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm">
              <BarChart3 className="text-white w-8 h-8" />
            </div>
            <span className="text-2xl font-bold text-on-surface">Hy Maxpro</span>
          </div>
          
          <p className="text-on-surface-variant font-sans font-medium text-center">
            © 2024 Tư vấn Chiến lược Hy Maxpro. Bảo lưu mọi quyền.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white rounded-full text-on-surface hover:text-primary transition-all hover:-translate-y-1 shadow-sm">
              <Share2 className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full text-on-surface hover:text-primary transition-all hover:-translate-y-1 shadow-sm">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full text-on-surface hover:text-primary transition-all hover:-translate-y-1 shadow-sm">
              <Globe2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

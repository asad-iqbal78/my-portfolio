const Experience = () => (
  <section id="experience" className="section section-tint">
    <div className="section-wrap">
      <div className="section-heading">
        <p className="eyebrow">Professional experience</p>
        <h2>Learning by building</h2>
      </div>
      <article className="experience-entry">
        <div className="experience-topline">
          <div>
            <h3>AI Internship</h3>
            <p className="entry-subtitle">Artificial Intelligence · Machine Learning · Computer Vision · Backend Development</p>
          </div>
          <span className="duration">8 weeks</span>
        </div>
        <p className="experience-summary">Completed an intensive 8-week AI internship covering Python, data analysis, machine learning, neural networks, deep learning, computer vision, OCR, API development, and deployment.</p>
        <ul className="experience-points">
          <li>Worked with NumPy, Pandas, Matplotlib, and Scikit-learn.</li>
          <li>Worked with PyTorch, YOLO, Ultralytics, OpenCV, and EasyOCR.</li>
          <li>Developed AI functionality using FastAPI REST APIs.</li>
          <li>Integrated AI backends with web applications and deployed applications online.</li>
          <li>Used GitHub and Postman for development and API testing.</li>
        </ul>
      </article>
    </div>
  </section>
);

export default Experience;
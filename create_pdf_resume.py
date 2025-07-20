#!/usr/bin/env python3
"""
Script to create a PDF resume for Sai Panindra Pechetti
"""

from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
import os

def create_resume_pdf():
    # Create the PDF file
    filename = "public/assets/Sai_Panindra_Pechetti_Resume.pdf"
    doc = SimpleDocTemplate(filename, pagesize=A4, 
                          rightMargin=72, leftMargin=72, 
                          topMargin=72, bottomMargin=18)
    
    # Get styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=30,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#1a365d')
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=14,
        spaceAfter=12,
        spaceBefore=20,
        textColor=colors.HexColor('#2d3748'),
        borderWidth=1,
        borderColor=colors.HexColor('#e2e8f0'),
        borderPadding=5
    )
    
    normal_style = ParagraphStyle(
        'CustomNormal',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=6,
        alignment=TA_JUSTIFY
    )
    
    # Build the story
    story = []
    
    # Header
    story.append(Paragraph("SAI PANINDRA PECHETTI", title_style))
    story.append(Paragraph("Full Stack Developer | Electronics & Communication Engineer", 
                          ParagraphStyle('subtitle', parent=styles['Normal'], 
                                       fontSize=12, alignment=TA_CENTER, 
                                       textColor=colors.HexColor('#4a5568'))))
    story.append(Spacer(1, 12))
    
    # Contact Info
    contact_data = [
        ["📧 trainwithjk26@gmail.com", "📱 +91-7095088395"],
        ["💼 linkedin.com/in/sai-088083344", "🐙 github.com/sai3570-je"]
    ]
    contact_table = Table(contact_data, colWidths=[3*inch, 3*inch])
    contact_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#4a5568')),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 20))
    
    # Education
    story.append(Paragraph("EDUCATION", heading_style))
    story.append(Paragraph("<b>Bachelor of Technology in Electronics and Communication Engineering</b><br/>"
                          "Raghu Institute of Technology | Expected: May 2026<br/>"
                          "CGPA: 7.75/10", normal_style))
    
    # Skills
    story.append(Paragraph("TECHNICAL SKILLS", heading_style))
    skills_data = [
        ["Programming Languages:", "Python, Java, JavaScript, HTML5, CSS3, SQL"],
        ["Web Technologies:", "React.js, Node.js, Express.js, MongoDB, Flask"],
        ["AI/ML & Data Science:", "Machine Learning, PyTorch, Pandas, NumPy, NLP"],
        ["Tools & Platforms:", "Git, GitHub, Linux, Tableau, Cloud Computing"],
        ["Core Technologies:", "IoT, Embedded Systems, Arduino, Raspberry Pi, VLSI Design"]
    ]
    skills_table = Table(skills_data, colWidths=[1.5*inch, 4.5*inch])
    skills_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, -1), 'RIGHT'),
        ('ALIGN', (1, 0), (1, -1), 'LEFT'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('TEXTCOLOR', (0, 0), (0, -1), colors.HexColor('#2d3748')),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 3),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
    ]))
    story.append(skills_table)
    
    # Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", heading_style))
    
    story.append(Paragraph("<b>Full Stack Web Developer</b> | Slash Mark | Current", 
                          ParagraphStyle('job_title', parent=normal_style, fontSize=11, 
                                       textColor=colors.HexColor('#2d3748'))))
    story.append(Paragraph("• Working on real-time client projects using the MERN stack for scalable applications<br/>"
                          "• Developing responsive web applications and implementing modern development practices<br/>"
                          "• Focus on user experience optimization and performance enhancement", normal_style))
    
    story.append(Paragraph("<b>AI & ML with Data Science Intern</b> | YBI Foundation | Dec 2024 – Feb 2025", 
                          ParagraphStyle('job_title', parent=normal_style, fontSize=11, 
                                       textColor=colors.HexColor('#2d3748'))))
    story.append(Paragraph("• Trained on real-world datasets and applied ML models using Python<br/>"
                          "• Gained experience in data preprocessing, model training, and evaluation techniques<br/>"
                          "• Implemented machine learning algorithms for practical applications", normal_style))
    
    story.append(Paragraph("<b>Java Full Stack Developer Intern</b> | Data Pro | Aug 2023 – Oct 2023", 
                          ParagraphStyle('job_title', parent=normal_style, fontSize=11, 
                                       textColor=colors.HexColor('#2d3748'))))
    story.append(Paragraph("• Built robust backend services and responsive front-end interfaces<br/>"
                          "• Worked with Java technologies for full-stack application development<br/>"
                          "• Gained experience in database integration and API development", normal_style))
    
    # Projects
    story.append(Paragraph("KEY PROJECTS", heading_style))
    
    story.append(Paragraph("<b>Smart Traffic Management System using IoT & AI</b>", 
                          ParagraphStyle('project_title', parent=normal_style, fontSize=11, 
                                       textColor=colors.HexColor('#2d3748'))))
    story.append(Paragraph("Built a smart traffic controller using Arduino, Raspberry Pi, and ultrasonic sensors. "
                          "Analyzed live camera feeds with OpenCV and adjusted signal timings dynamically using Flask and MQTT.", 
                          normal_style))
    
    story.append(Paragraph("<b>Character-Level GPT Language Model using PyTorch</b>", 
                          ParagraphStyle('project_title', parent=normal_style, fontSize=11, 
                                       textColor=colors.HexColor('#2d3748'))))
    story.append(Paragraph("Developed a custom GPT-like model generating Shakespearean-style text from scratch. "
                          "Implemented core transformer concepts like self-attention and positional encoding.", 
                          normal_style))
    
    # Achievements
    story.append(Paragraph("ACHIEVEMENTS & CERTIFICATIONS", heading_style))
    story.append(Paragraph("• <b>LeetCode:</b> 150+ problems solved<br/>"
                          "• <b>GitHub:</b> 181+ commits across various projects<br/>"
                          "• <b>Certifications:</b> Accenture Developer Simulation, TATA Data Visualisation, IBM Python for Data Science<br/>"
                          "• <b>Languages:</b> Fluent in English, Hindi, and Telugu", normal_style))
    
    # Build PDF
    doc.build(story)
    print(f"Resume PDF created successfully: {filename}")

if __name__ == "__main__":
    create_resume_pdf()


---
title: "NFI – Argus RAM Analysis (Integration) 2024"
slug: "nfi-internship"
date: "2024-10-08T14:45:03"
featuredImage: "https://darkgoldenrod-walrus-345771.hostingersite.com/wp-content/uploads/2024/10/nfi-gebouw1.jpg"
tags:
  - internship
  - nfi
  - police
  - ministry
---

![NFI Building](https://darkgoldenrod-walrus-345771.hostingersite.com/wp-content/uploads/2024/10/digitale-technologie-1024x472.jpg)

This document describes the research that has been conducted over the past period. As the title suggests, the focus of the research was on RAM analysis integration within Argus. The FDT department is currently working on a system called Argus, which is responsible for conducting various experiments on mobile devices. At present, Argus does not support the ability to perform experiments involving the RAM memory of mobile devices. This limitation prompted research into how Argus's functionality could be expanded by integrating RAM acquisition and analysis tools. With this integration, forensic investigators will be able to perform in-depth analyses, ultimately aiming to identify digital traces for forensic purposes.

The research began with a general analysis of Argus. It was especially important to gain a clear understanding of the current system and its intended purpose. This was achieved through interviews, meetings, and internal literature review. Following this, research was conducted into quality criteria, and based on the findings, ISO standard 25010 was selected. This information allowed for the development of a requirements analysis, which outlined the client's needs — a crucial part of the subsequent quality investigation.

This led to a literature review of various tools available on the market. Based on this review, a quality assessment was conducted to evaluate these tools and how they function. The research revealed that RAM acquisition can be divided into individual acquisition and device acquisition. As for the tools used to analyze RAM memory, they were divided into three categories:

- **Volatile analysis** (analyzing RAM to uncover digital evidence)
- **String extraction** (RAM analysis based on extracted strings)
- **Carving tools** (tools that extract files from RAM)

Various applications using these tools were examined and tested for data integrity. Besides quality assessment, it was important to analyze the reliability of these tools and whether the data is manipulated.

Subsequently, recommendations were made regarding the tested tools, including suggestions on which tools can best be combined. These tools were also compared based on cost and other critical features. After mapping the various alternatives and combinations, integration possibilities within Argus were explored. Multiple discussions and interviews took place. Based on this information, BPMN models were designed and discussed with the developer and the client.

The research concluded that the best tools depend on the specific goals of the forensic investigator, and that no single tool is universally superior.

**An overview of the conclusion can be found in Chapter 9.**

[📄 NFI8 – Final Report (preview)](https://darkgoldenrod-walrus-345771.hostingersite.com/wp-content/uploads/2024/10/NFI8-Afstudeerverslag.pdf)  
[⬇️ Download PDF](https://darkgoldenrod-walrus-345771.hostingersite.com/wp-content/uploads/2024/10/NFI8-Afstudeerverslag.pdf)

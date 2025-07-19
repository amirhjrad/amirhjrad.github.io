---
permalink: /projects/
title: "My Projects"
author_profile: true
---

## My Projects

Explore my work in Digital Systems, Hardware Design, and interdisciplinary applications. Click a project to view full details and access the source code.

<div class="projects-list">
  <div class="project-item">
    <div class="project-header">
      <img src="https://via.placeholder.com/100x60?text=Neural+Accelerator" alt="Neural Network Accelerator" class="project-image">
      <h3>FPGA-Based Neural Network Accelerator</h3>
    </div>
    <div class="project-details">
      <h4>Overview</h4>
      <p>Designed and implemented a hardware accelerator for convolutional neural networks (CNNs) on a Xilinx Zynq-7000 FPGA. The project optimized matrix multiplication for low-latency inference, achieving a 30% performance improvement over software-based solutions.</p>
      <h4>Technical Details</h4>
      <ul>
        <li><strong>Technologies:</strong> Verilog, Vivado, Python, TensorFlow</li>
        <li><strong>Completed:</strong> May 2025</li>
        <li><strong>Hardware:</strong> Xilinx Zynq-7000 SoC (FPGA + ARM Cortex-A9)</li>
      </ul>
      <h4>Implementation</h4>
      <p>The accelerator was designed using Verilog, with a focus on parallelizing matrix multiplication operations critical for CNNs. The Vivado design suite was used for synthesis and implementation. Python and TensorFlow validated the model and generated test data. A custom memory controller handled efficient data transfers between the FPGA and external memory.</p>
      <h4>Challenges and Solutions</h4>
      <p>Balancing resource utilization with performance was challenging due to limited LUTs and DSP slices. A tiled matrix multiplication algorithm reduced memory bandwidth needs, improving throughput. Integration with the ARM core was achieved via a custom AXI interface for seamless communication.</p>
      <h4>Results</h4>
      <p>Achieved 500 MFLOPS throughput with 2ms latency per inference, outperforming software by 30%. Power consumption was reduced by 15% through optimized dataflow and clock gating. Validated with a ResNet-18 model for edge AI applications.</p>
      <p><strong>Source Code:</strong> <a href="https://github.com/yourusername/neural-accelerator" target="_blank">GitHub Repository</a></p>
    </div>
  </div>

  <div class="project-item">
    <div class="project-header">
      <img src="https://via.placeholder.com/100x60?text=ECG+Processor" alt="ECG Signal Processing" class="project-image">
      <h3>Real-Time ECG Signal Processing</h3>
    </div>
    <div class="project-details">
      <h4>Overview</h4>
      <p>Developed an FPGA-based system for real-time ECG signal processing to detect heart rate anomalies, using digital filters and a lightweight machine learning model.</p>
      <h4>Technical Details</h4>
      <ul>
        <li><strong>Technologies:</strong> VHDL, MATLAB, Altera Cyclone V</li>
        <li><strong>Completed:</strong> December 2024</li>
        <li><strong>Hardware:</strong> Altera Cyclone V FPGA</li>
      </ul>
      <h4>Implementation</h4>
      <p>Implemented FIR filters in VHDL for noise reduction, with a decision tree classifier integrated on the FPGA for anomaly detection. MATLAB was used for algorithm development and simulation. The system processed ECG signals in real-time with minimal latency.</p>
      <h4>Challenges and Solutions</h4>
      <p>Real-time processing required precise timing constraints. Optimized filter coefficients reduced computational load, and pipelining ensured low latency. Limited FPGA resources were managed by reusing hardware blocks for multiple tasks.</p>
      <h4>Results</h4>
      <p>Achieved 95% accuracy in anomaly detection with a processing latency of 1ms. The system was tested with real ECG datasets, demonstrating reliability for medical applications.</p>
      <p><strong>Source Code:</strong> <a href="https://github.com/yourusername/ecg-processor" target="_blank">GitHub Repository</a></p>
    </div>
  </div>

  <div class="project-item">
    <div class="project-header">
      <img src="https://via.placeholder.com/100x60?text=AES+Module" alt="AES Encryption Module" class="project-image">
      <h3>Hardware-Optimized AES Module</h3>
    </div>
    <div class="project-details">
      <h4>Overview</h4>
      <p>Implemented a high-speed AES encryption module on a Spartan-6 FPGA, focusing on low latency and robust security with 1.2 Gbps throughput.</p>
      <h4>Technical Details</h4>
      <ul>
        <li><strong>Technologies:</strong> Verilog, Xilinx ISE, C++</li>
        <li><strong>Completed:</strong> August 2024</li>
        <li><strong>Hardware:</strong> Spartan-6 FPGA</li>
      </ul>
      <h4>Implementation</h4>
      <p>Designed an optimized AES-128 encryption core in Verilog, using Xilinx ISE for synthesis. The S-box was optimized for minimal resource usage, and C++ was used for testbench development. Hardware-in-the-loop testing verified functionality.</p>
      <h4>Challenges and Solutions</h4>
      <p>High throughput required careful pipelining. An unrolled loop design increased performance but demanded more resources, resolved by sharing logic across rounds. Timing closure was achieved through iterative synthesis optimizations.</p>
      <h4>Results</h4>
      <p>Achieved 1.2 Gbps throughput with a 5ns latency per block. The module was secure against common cryptographic attacks, validated through extensive testing.</p>
      <p><strong>Source Code:</strong> <a href="https://github.com/yourusername/aes-module" target="_blank">GitHub Repository</a></p>
    </div>
  </div>

  <div class="project-item">
    <div class="project-header">
      <img src="https://via.placeholder.com/100x60?text=Smart+Home" alt="Smart Home Controller" class="project-image">
      <h3>Smart Home Automation Controller</h3>
    </div>
    <div class="project-details">
      <h4>Overview</h4>
      <p>Built an ESP32-based smart home system for lighting and temperature control, integrating IoT protocols and an AI-driven predictive algorithm.</p>
      <h4>Technical Details</h4>
      <ul>
        <li><strong>Technologies:</strong> ESP32, C, MQTT, Python</li>
        <li><strong>Completed:</strong> March 2024</li>
        <li><strong>Hardware:</strong> ESP32 microcontroller</li>
      </ul>
      <h4>Implementation</h4>
      <p>Programmed the ESP32 in C to interface with sensors and actuators, using MQTT for IoT communication. A Python-based AI model predicted optimal lighting and temperature settings based on user patterns, deployed on a local server.</p>
      <h4>Challenges and Solutions</h4>
      <p>Network latency in IoT communication was mitigated by optimizing MQTT message frequency. Limited ESP32 memory required a lightweight AI model, achieved by pruning the neural network without sacrificing accuracy.</p>
      <h4>Results</h4>
      <p>The system reduced energy consumption by 20% through predictive control. A mobile app interface enabled remote control, tested successfully in a home environment.</p>
      <p><strong>Source Code:</strong> <a href="https://github.com/yourusername/smart-home" target="_blank">GitHub Repository</a></p>
    </div>
  </div>
</div>

<style>
  .projects-list {
    margin-top: 20px;
  }
  .project-item {
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .project-item:hover {
    background-color: #f5f5f5;
  }
  .project-header {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .project-image {
    width: 100px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
  .project-details {
    display: none;
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  .project-details p {
    margin: 5px 0;
  }
  .project-details a {
    color: #0066cc;
    text-decoration: none;
  }
  .project-details a:hover {
    text-decoration: underline;
  }
  h3 {
    margin: 0;
    color: #222;
  }
  h4 {
    color: #333;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    .project-header {
      flex-direction: column;
      align-items: flex-start;
    }
    .project-image {
      width: 100%;
      height: auto;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.project-item');
    items.forEach(item => {
      item.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A') {
          const details = this.querySelector('.project-details');
          details.style.display = details.style.display === 'none' ? 'block' : 'none';
        }
      });
    });
  });
</script>
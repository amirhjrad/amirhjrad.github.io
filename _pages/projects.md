---
permalink: /projects/
title: "My Projects"
author_profile: true
---

## My Projects

Explore my work in Digital Systems, Hardware Design, and interdisciplinary applications. Click a project title to view full details and access the source code.

<div class="projects-list">
  <div class="project-item" data-project="neural-accelerator">
    ### FPGA-Based Neural Network Accelerator

    <div class="project-details" markdown="1">
      #### Overview
      Designed and implemented a hardware accelerator for convolutional neural networks (CNNs) on a Xilinx Zynq-7000 FPGA. The project optimized matrix multiplication for low-latency inference, achieving a 30% performance improvement over software-based solutions.

      #### Technical Details
      - **Technologies**: Verilog, Vivado, Python, TensorFlow
      - **Completed**: May 2025
      - **Hardware**: Xilinx Zynq-7000 SoC (FPGA + ARM Cortex-A9)

      #### Implementation
      The accelerator was designed using Verilog, focusing on parallelizing matrix multiplication operations critical for CNNs. The Vivado design suite was used for synthesis and implementation. Python and TensorFlow validated the model and generated test data. A custom memory controller handled efficient data transfers between the FPGA and external memory.

      #### Challenges and Solutions
      Balancing resource utilization with performance was challenging due to limited LUTs and DSP slices. A tiled matrix multiplication algorithm reduced memory bandwidth needs, improving throughput. Integration with the ARM core was achieved via a custom AXI interface for seamless communication.

      #### Results
      Achieved 500 MFLOPS throughput with 2ms latency per inference, outperforming software by 30%. Power consumption was reduced by 15% through optimized dataflow and clock gating. Validated with a ResNet-18 model for edge AI applications.

      **Source Code**: [GitHub Repository](https://github.com/yourusername/neural-accelerator)
    </div>
  </div>

  <div class="project-item" data-project="ecg-processor">
    ### Real-Time ECG Signal Processing

    <div class="project-details" markdown="1">
      #### Overview
      Developed an FPGA-based system for real-time ECG signal processing to detect heart rate anomalies, using digital filters and a lightweight machine learning model.

      #### Technical Details
      - **Technologies**: VHDL, MATLAB, Altera Cyclone V
      - **Completed**: December 2024
      - **Hardware**: Altera Cyclone V FPGA

      #### Implementation
      Implemented FIR filters in VHDL for noise reduction, with a decision tree classifier integrated on the FPGA for anomaly detection. MATLAB was used for algorithm development and simulation. The system processed ECG signals in real-time with minimal latency.

      #### Challenges and Solutions
      Real-time processing required precise timing constraints. Optimized filter coefficients reduced computational load, and pipelining ensured low latency. Limited FPGA resources were managed by reusing hardware blocks for multiple tasks.

      #### Results
      Achieved 95% accuracy in anomaly detection with a processing latency of 1ms. The system was tested with real ECG datasets, demonstrating reliability for medical applications.

      **Source Code**: [GitHub Repository](https://github.com/yourusername/ecg-processor)
    </div>
  </div>

  <div class="project-item" data-project="aes-module">
    ### Hardware-Optimized AES Module

    <div class="project-details" markdown="1">
      #### Overview
      Implemented a high-speed AES encryption module on a Spartan-6 FPGA, focusing on low latency and robust security with 1.2 Gbps throughput.

      #### Technical Details
      - **Technologies**: Verilog, Xilinx ISE, C++
      - **Completed**: August 2024
      - **Hardware**: Spartan-6 FPGA

      #### Implementation
      Designed an optimized AES-128 encryption core in Verilog, using Xilinx ISE for synthesis. The S-box was optimized for minimal resource usage, and C++ was used for testbench development. Hardware-in-the-loop testing verified functionality.

      #### Challenges and Solutions
      High throughput required careful pipelining. An unrolled loop design increased performance but demanded more resources, resolved by sharing logic across rounds. Timing closure was achieved through iterative synthesis optimizations.

      #### Results
      Achieved 1.2 Gbps throughput with a 5ns latency per block. The module was secure against common cryptographic attacks, validated through extensive testing.

      **Source Code**: [GitHub Repository](https://github.com/yourusername/aes-module)
    </div>
  </div>

  <div class="project-item" data-project="smart-home">
    ### Smart Home Automation Controller

    <div class="project-details" markdown="1">
      #### Overview
      Built an ESP32-based smart home system for lighting and temperature control, integrating IoT protocols and an AI-driven predictive algorithm.

      #### Technical Details
      - **Technologies**: ESP32, C, MQTT, Python
      - **Completed**: March 2024
      - **Hardware**: ESP32 microcontroller

      #### Implementation
      Programmed the ESP32 in C to interface with sensors and actuators, using MQTT for IoT communication. A Python-based AI model predicted optimal lighting and temperature settings based on user patterns, deployed on a local server.

      #### Challenges and Solutions
      Network latency in IoT communication was mitigated by optimizing MQTT message frequency. Limited ESP32 memory required a lightweight AI model, achieved by pruning the neural network without sacrificing accuracy.

      #### Results
      The system reduced energy consumption by 20% through predictive control. A mobile app interface enabled remote control, tested successfully in a home environment.

      **Source Code**: [GitHub Repository](https://github.com/yourusername/smart-home)
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
  .project-item h3 {
    margin: 0;
    color: #222;
  }
  .project-details {
    max-height: 0;
    overflow: hidden;
    margin-top: 10px;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  }
  .project-details.active {
    max-height: 1000px; /* Adjust based on content size */
    padding: 10px;
  }
  .project-details p, .project-details ul {
    margin: 5px 0;
  }
  .project-details a {
    color: #0066cc;
    text-decoration: none;
  }
  .project-details a:hover {
    text-decoration: underline;
  }
  .project-details h4 {
    color: #333;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    .project-item {
      padding: 10px 0;
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
          const isActive = details.classList.contains('active');
          // Close all other details
          document.querySelectorAll('.project-details').forEach(d => {
            d.classList.remove('active');
            d.style.maxHeight = '0';
            d.style.padding = '0 10px';
          });
          // Toggle current details
          if (!isActive) {
            details.classList.add('active');
            details.style.maxHeight = details.scrollHeight + 'px';
            details.style.padding = '10px';
          }
        }
      });
    });
  });
</script>
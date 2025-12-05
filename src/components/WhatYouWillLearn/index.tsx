import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type LearnItem = {
  title: string;
  image: string;
  icon: string;
  description: ReactNode;
};

const LearnList: LearnItem[] = [
  {
    title: 'Build Foundations in Advanced Robotics & Motion Control',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=600&fit=crop',
    icon: '🦾',
    description: (
      <>
        Learn how modern robots perceive, move, and make decisions using advanced motion planning and control systems.
      </>
    ),
  },
  {
    title: 'Work with ROS 2 for Real-World Robotics Applications',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=600&fit=crop',
    icon: '🛠️',
    description: (
      <>
        Build, deploy, and manage robotic behaviors using ROS 2—the most widely adopted open-source robotics framework.
      </>
    ),
  },
  {
    title: 'Simulate Intelligent Robots Using Gazebo, Unity, and Web Simulators',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDA%3D',
    icon: '🧪',
    description: (
      <>
        Experiment in realistic 3D environments to test autonomy, navigation, and real-time interactions safely and efficiently.
      </>
    ),
  },
  {
    title: 'Build AI-Powered Robots with the NVIDIA Isaac Platform',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    icon: '⚡',
    description: (
      <>
        Harness GPU acceleration and advanced AI tools to develop high-performance robotic systems and autonomous behaviors.
      </>
    ),
  },
  {
    title: 'Design Human-Centric Humanoid Robots',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    icon: '🤖',
    description: (
      <>
        Learn how to build robots capable of natural movement, perception, and interaction for real-world tasks.
      </>
    ),
  },
  {
    title: 'Integrate LLMs for Natural and Adaptive Robot Conversations',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=600&fit=crop',
    icon: '🔊',
    description: (
      <>
        Combine robotic intelligence with GPT-style models to create responsive, conversational, and task-aware robotic agents.
      </>
    ),
  },
];



function Learn({ title, image, icon, description }: LearnItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card card--full-height', styles.learnCard)}>
        <div className={styles.learnImage}>
          <img src={image} alt={title} />
          <div className={styles.learnIcon}>{icon}</div>
        </div>
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhatYouWillLearn(): ReactNode {
  return (
    <section className={styles.learn}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className={styles.sectionTitle}>Your Learning Journey</Heading>
          <p className={styles.sectionSubtitle}>Understand the foundations and advanced principles of Physical AI and Humanoid Robotics.</p>
        </div>
        <div className="row">
          {LearnList.map((props, idx) => (
            <Learn key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

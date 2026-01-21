import React from "react";
import Footer from "../components/Footer";

export default function MachineLearning() {
  const mlModels = [
    {
      id: 1,
      name: "Image Recognition Neural Network",
      accuracy: "94.2%",
      tech: ["Python", "TensorFlow", "OpenCV"],
      description:
        "Model Deep Learning untuk klasifikasi objek secara real-time dengan latensi rendah.",
      dataset: "Custom Dataset (10k images)",
    },
    {
      id: 2,
      name: "Customer Churn Predictor",
      accuracy: "89.5%",
      tech: ["Scikit-Learn", "Pandas", "XGBoost"],
      description:
        "Analisis prediktif untuk menentukan kemungkinan pelanggan berhenti berlangganan.",
      dataset: "Kaggle Finance Dataset",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-[#050505] text-[#d1d5db] relative overflow-hidden'>
      {/* Background Decor: Floating Particles/Nodes */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-[20%] left-[10%] w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px]' />
        <div className='absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]' />
      </div>

      <div className='pt-32 max-w-5xl mx-auto px-6 mb-20 flex-grow relative z-10'>
        <div className='mb-16 text-center lg:text-left'>
          <h1 className='text-4xl font-mono text-indigo-400 mb-2 tracking-tighter'>
            [ research_archive ] Machine_Learning
          </h1>
          <p className='text-gray-500 font-mono text-sm uppercase tracking-[0.3em]'>
            Decoding patterns through mathematical models.
          </p>
        </div>

        {/* ML Card Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {mlModels.map((model) => (
            <div
              key={model.id}
              className='border border-gray-800 p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#0f111a] hover:border-indigo-500/50 transition-all group'
            >
              <div className='flex justify-between items-start mb-6'>
                <div className='p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors'>
                  <div className='w-6 h-6 border-2 border-indigo-400 rounded-sm rotate-45'></div>
                </div>
                <div className='text-right'>
                  <p className='text-[10px] text-gray-500 uppercase'>
                    Test Accuracy
                  </p>
                  <p className='text-xl font-bold text-indigo-400 font-mono'>
                    {model.accuracy}
                  </p>
                </div>
              </div>

              <h2 className='text-xl font-bold text-white mb-2'>
                {model.name}
              </h2>
              <p className='text-sm text-gray-500 mb-4 leading-relaxed'>
                {model.description}
              </p>

              <div className='space-y-3'>
                <div className='flex flex-wrap gap-2'>
                  {model.tech.map((t) => (
                    <span
                      key={t}
                      className='text-[10px] font-mono bg-indigo-500/5 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20'
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className='text-[11px] font-mono text-gray-600 italic'>
                  Source: {model.dataset}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from 'react';

/**
 * Hook for managing initial site loading
 * Shows loader until critical resources (videos) are loaded
 */
export const useInitialLoader = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Check if site was already loaded in this session
    const hasLoaded = sessionStorage.getItem('siteInitiallyLoaded');
    
    if (hasLoaded === 'true') {
      setIsInitialLoading(false);
      setLoadingProgress(100);
      return;
    }

    const startTime = Date.now();
    const minLoadingTime = 15000; // Увеличено до 15 секунд для загрузки видео
    let videosLoaded = false;

    // Предзагрузка критических видео
    const preloadVideos = () => {
      return new Promise<void>((resolve) => {
        const video1 = document.createElement('video');
        const video2 = document.createElement('video');
        
        let loadedCount = 0;
        const totalVideos = 2;

        const checkAllLoaded = () => {
          loadedCount++;
          
          if (loadedCount >= totalVideos) {
            videosLoaded = true;
            resolve();
          }
        };

        // Настройка загрузки первого видео
        video1.preload = 'auto';
        video1.oncanplaythrough = checkAllLoaded;
        video1.onerror = () => {
          checkAllLoaded(); // Продолжаем даже при ошибке
        };
        video1.src = '/videos/videoAI_1.mp4';
        video1.load();

        // Настройка загрузки второго видео
        video2.preload = 'auto';
        video2.oncanplaythrough = checkAllLoaded;
        video2.onerror = () => {
          checkAllLoaded(); // Продолжаем даже при ошибке
        };
        video2.src = '/videos/videoAI_2.mp4';
        video2.load();

        // Таймаут на случай очень медленного соединения
        setTimeout(() => {
          if (!videosLoaded) {
            resolve();
          }
        }, 20000); // Максимум 20 секунд ожидания
      });
    };

    // Начинаем предзагрузку видео
    preloadVideos();
    
    // Плавное увеличение прогресса
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / minLoadingTime) * 100, 100);
      
      setLoadingProgress(progress);
      
      // Завершаем загрузку только если прошло минимальное время И видео загружены
      if (progress >= 100) {
        clearInterval(progressInterval);
        
        // Небольшая задержка перед скрытием лоадера
        setTimeout(() => {
          setIsInitialLoading(false);
          sessionStorage.setItem('siteInitiallyLoaded', 'true');
        }, 500);
      }
    }, 50); // Обновляем каждые 50мс для плавности

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return { isInitialLoading, loadingProgress };
};
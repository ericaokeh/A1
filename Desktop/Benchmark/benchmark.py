import time
import psutil
import numpy as np
from memory_profiler import profile

class SystemBenchmark:
    def __init__(self):
        self.cpu_count = psutil.cpu_count()
        self.memory = psutil.virtual_memory()

    def cpu_benchmark(self, n=1000000):
        """CPU performance benchmark using matrix operations"""
        start_time = time.time()
        
        # Matrix multiplication benchmark
        matrix_size = 200
        matrix1 = np.random.rand(matrix_size, matrix_size)
        matrix2 = np.random.rand(matrix_size, matrix_size)
        result = np.dot(matrix1, matrix2)
        
        end_time = time.time()
        return end_time - start_time

    @profile
    def memory_benchmark(self, size=1000000):
        """Memory access speed benchmark"""
        start_time = time.time()
        
        # Allocate and access memory
        array = np.random.rand(size)
        array_sum = np.sum(array)
        
        end_time = time.time()
        return end_time - start_time

    def cache_benchmark(self, iterations=1000000):
        """Cache performance benchmark"""
        start_time = time.time()
        
        # Create array larger than typical L1 cache
        array = np.random.rand(1024 * 1024)  # 8MB array (assuming 8 bytes per float)
        sum_val = 0
        
        # Sequential access
        for _ in range(iterations):
            sum_val += array[_ % len(array)]
            
        end_time = time.time()
        return end_time - start_time

    def io_benchmark(self, file_size=1024*1024):
        """I/O operations benchmark"""
        start_time = time.time()
        
        # Write test
        with open('benchmark_test.txt', 'w') as f:
            f.write('0' * file_size)
            
        # Read test
        with open('benchmark_test.txt', 'r') as f:
            data = f.read()
            
        end_time = time.time()
        return end_time - start_time

def run_benchmarks():
    benchmark = SystemBenchmark()
    
    print("System Information:")
    print(f"CPU Cores: {benchmark.cpu_count}")
    print(f"Total Memory: {benchmark.memory.total / (1024**3):.2f} GB")
    print(f"Available Memory: {benchmark.memory.available / (1024**3):.2f} GB")
    print("\nRunning benchmarks...")
    
    # Run CPU benchmark
    cpu_time = benchmark.cpu_benchmark()
    print(f"\nCPU Benchmark (Matrix Multiplication):")
    print(f"Time taken: {cpu_time:.4f} seconds")
    
    # Run memory benchmark
    memory_time = benchmark.memory_benchmark()
    print(f"\nMemory Benchmark:")
    print(f"Time taken: {memory_time:.4f} seconds")
    
    # Run cache benchmark
    cache_time = benchmark.cache_benchmark()
    print(f"\nCache Benchmark:")
    print(f"Time taken: {cache_time:.4f} seconds")
    
    # Run I/O benchmark
    io_time = benchmark.io_benchmark()
    print(f"\nI/O Benchmark:")
    print(f"Time taken: {io_time:.4f} seconds")

if __name__ == "__main__":
    run_benchmarks() 
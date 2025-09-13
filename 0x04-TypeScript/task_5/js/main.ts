// Interface for MajorCredits
interface MajorCredits {
  credits: number;
  _brand: 'major'; // Brand property to uniquely identify MajorCredits
}

// Interface for MinorCredits
interface MinorCredits {
  credits: number;
  _brand: 'minor'; // Brand property to uniquely identify MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    _brand: 'major'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    _brand: 'minor'
  };
}

// Example usage and demonstration
function demonstrateCredits(): void {
  console.log('=== Credits System Demonstration ===');
  
  // Create some sample credits
  const majorSubject1: MajorCredits = { credits: 3, _brand: 'major' };
  const majorSubject2: MajorCredits = { credits: 4, _brand: 'major' };
  
  const minorSubject1: MinorCredits = { credits: 2, _brand: 'minor' };
  const minorSubject2: MinorCredits = { credits: 1, _brand: 'minor' };
  
  // Test sumMajorCredits
  const totalMajor = sumMajorCredits(majorSubject1, majorSubject2);
  console.log(`Major Credits Sum: ${majorSubject1.credits} + ${majorSubject2.credits} = ${totalMajor.credits}`);
  
  // Test sumMinorCredits
  const totalMinor = sumMinorCredits(minorSubject1, minorSubject2);
  console.log(`Minor Credits Sum: ${minorSubject1.credits} + ${minorSubject2.credits} = ${totalMinor.credits}`);
  
  // Type safety demonstration
  console.log('\n=== Type Safety Check ===');
  console.log('Major total brand:', totalMajor._brand);
  console.log('Minor total brand:', totalMinor._brand);
  
  // This would cause TypeScript errors if uncommented:
  // const invalidSum = sumMajorCredits(majorSubject1, minorSubject1); // Error: Types not compatible
}

// Run the demonstration
demonstrateCredits();

// Export the interfaces and functions
export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };

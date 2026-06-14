const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function getAge(birthDate: string): number {
  const birth = new Date(`${birthDate}T00:00:00`);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const hadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hadBirthdayThisYear) {
    age -= 1;
  }

  return age;
}

export function getLifeOrbitStats(birthDate: string, now: Date = new Date()) {
  const [year, month, day] = birthDate.split("-").map(Number);
  const age = getAge(birthDate);

  let lastBirthday = new Date(now.getFullYear(), month - 1, day);
  if (lastBirthday > now) {
    lastBirthday = new Date(now.getFullYear() - 1, month - 1, day);
  }

  const nextBirthday = new Date(lastBirthday);
  nextBirthday.setFullYear(lastBirthday.getFullYear() + 1);

  const elapsed = now.getTime() - lastBirthday.getTime();
  const span = nextBirthday.getTime() - lastBirthday.getTime();
  const yearProgress = Math.min(1, Math.max(0, elapsed / span));
  const daysUntilBirthday = Math.ceil(
    (nextBirthday.getTime() - now.getTime()) / MS_PER_DAY,
  );

  return {
    age,
    nextAge: age + 1,
    yearProgress,
    daysUntilBirthday,
    birthMonthDay: new Date(year, month - 1, day).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    }),
  };
}

export function getTimeOfDayDegrees(now: Date = new Date()) {
  const seconds =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  return (seconds / 86400) * 360;
}

export function getClockHandAngles(date: Date) {
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return {
    hour: hours * 30 + minutes * 0.5,
    minute: minutes * 6 + seconds * 0.1,
    second: seconds * 6,
  };
}

export function formatOrbitTime(now: Date = new Date()) {
  return now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

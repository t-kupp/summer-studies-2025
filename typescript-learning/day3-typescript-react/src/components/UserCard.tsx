export default function UserCard() {
  interface UserCardProps {
    name: string;
    email: string;
    age?: number;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
  }

  function UserCard({ name, email, age, isActive = false, onClick, className }: UserCardProps) {
    return (
      <div className={`bg-neutral-200 border p-4 my-4 ${className}`} onClick={onClick}>
        <p>Username: {name}</p>
        <p>Email: {email}</p>
        {age && <p>Age: {age}</p>}
        <p>User is {isActive ? 'online' : 'offline'}.</p>
      </div>
    );
  }

  return (
    <div>
      <UserCard name='Andy' email='andy@email.com' onClick={() => console.log("I'm Andy!")} />
      <UserCard
        name='Dora'
        email='dora@email.com'
        age={19}
        onClick={() => console.log("I'm Dora!")}
      />
      <UserCard name='Bruno' email='bruno@email.com' isActive={true} />
    </div>
  );
}
